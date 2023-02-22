import fileService from '../../services/file';
import folderService from '../../services/folder';
import userService from '../../services/user';
import renderGrid from '../components/_grid';
import modalHelper from '../components/_modal';
import tableHelper from '../components/_table';
import ready, { convertToJSONString } from '../utilities/_helper';

declare var $: any;

const indexLinkFolder: string[] = JSON.parse(
  localStorage.getItem('indexLinkFolder') ||
    '["D0D0AADD-B674-4434-09F0-08DB12FD2CFE"]',
);

const indexFolder =
  indexLinkFolder[indexLinkFolder.length - 1] ||
  'D0D0AADD-B674-4434-09F0-08DB12FD2CFE';

ready(() => {
  renderGrid();
});

const renderTable = async () => {
  folderService.getById(indexFolder).then(folder => {
    $('.table-container').html(folder ? '' : 'Folder not found!');
    $('#container-header-title').html(
      folder ? '' : 'Folder not found!',
    );

    if (!folder) return;

    // in case user clicks to folder
    $('#backIcon').on('click', () => {
      indexLinkFolder.pop();

      localStorage.setItem(
        'indexLinkFolder',
        convertToJSONString(indexLinkFolder),
      );

      window.location.reload();
    });

    $('#container-header-title').text(folder.name);

    folder.subFolders.forEach(item => {
      const $FOLDER_ITEM = tableHelper.renderTableItem(item);

      $('.table-container').append($FOLDER_ITEM);
    });

    folder.files.forEach(item => {
      const $FILE_ITEM = tableHelper.renderTableItem(item);

      $('.table-container').append($FILE_ITEM);
    });
  });
};

$(document).ready(() => {
  userService.getUserInfo().then(user => {
    $('#username').text(user.name);
    // Waiting loading content
    $('.table-container').html('Loading...');
    $('#container-header-title').html('Loading...');

    // handle file
    $('#file-input').change((e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      // maximum file size is 10MB
      if (file.size > 10 * 1024 * 1024) {
        $('#toast-message').text('File size is too large!');
        $('#notifyToast').toast('show');
        return;
      }
      const name = file.name.split('.')[0];
      const extension = file.name.split('.')[1];
      folderService
        .addFile(indexFolder, {
          name,
          extension,
          modifiedBy: 'admin',
        })
        .then(res => {
          if (!res) return;

          $('.table-container').append(
            tableHelper.renderTableItem(res),
          );
        });
    });

    // hide icon back when there is a root folder
    if (indexLinkFolder.length === 1) {
      $('#backIcon').hide();
    }

    renderTable();

    // set function for sync button
    $('#syncBtn').click(() => {
      renderTable();
    });

    // When user click to new item button
    $('#btnNewItem').on('click', () => {
      $('#btnSubmit').data('type', 'add');

      modalHelper.setValueForCommonModal('Add', 'folder', '', '', '');
    });

    $('#logoutBtn').click(() => {
      window.location.href =
        'https://localhost:44307/api/Auth/signout';
    });

    // add new item
    $('#btnSubmit').on('click', () => {
      const type = $('#type').val();
      const name = $('#name').val();
      const extension = $('#extension').val();
      const id = $('#id').val();
      const btnType = $('#btnSubmit').data('type');

      // handle edit and add
      switch (btnType) {
        case 'add': {
          if (type === 'file') {
            modalHelper.setLoadingForSubmitButton(true);

            folderService
              .addFile(indexFolder, {
                name,
                extension,
                modifiedBy: 'admin',
              })
              .then(res => {
                if (!res) return;

                modalHelper.setLoadingForSubmitButton(false);
                $('.table-container').append(
                  tableHelper.renderTableItem(res),
                );

                $('#commonModal').modal('hide');
              });
          } else {
            modalHelper.setLoadingForSubmitButton(true);

            folderService
              .create(indexFolder, {
                name,
                modifiedBy: 'admin',
              })
              .then(res => {
                modalHelper.setLoadingForSubmitButton(false);
                if (!res) return;

                const $FOLDER_ITEM = tableHelper.renderTableItem(res);
                $('.table-container').prepend($FOLDER_ITEM);

                $('#commonModal').modal('hide');
              });
          }
          break;
        }
        case 'edit': {
          // Edit file
          if (type === 'file') {
            modalHelper.setLoadingForSubmitButton(true);

            fileService
              .update({
                modifiedAt: new Date(),
                modifiedBy: 'admin',
                name,
                extension,
                id,
              })
              .then(res => {
                modalHelper.setLoadingForSubmitButton(false);
                if (!res) return;
                const $FILE_ITEM = tableHelper.renderTableItem(res);

                $(`.table-item[data-id="${id}"]`).replaceWith(
                  $FILE_ITEM,
                );

                $('#commonModal').modal('hide');
              });
          }
          // Edit folder
          else {
            modalHelper.setLoadingForSubmitButton(true);
            folderService
              .update(id, {
                modifiedAt: new Date(),
                modifiedBy: 'admin',
                name,
              })
              .then(res => {
                if (!res) return;

                modalHelper.setLoadingForSubmitButton(false);
                const $FOLDER_ITEM = tableHelper.renderTableItem(res);

                $(`.table-item[data-id="${id}"]`).replaceWith(
                  $FOLDER_ITEM,
                );

                $('#commonModal').modal('hide');
              });
          }
          break;
        }
        default: {
          break;
        }
      }
    });

    // When click to change type of item
    $('#type').on('change', () => {
      const type = $('#type').val();

      $('#extension').prop('disabled', type === 'folder');
      $('#commonModal')
        .find('#commonModalLabel')
        .text(`Add ${type}`);
    });
  });
});
