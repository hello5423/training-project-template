import { FileGenerated } from '../../models/_file';
import { FolderGenerated } from '../../models/_folder';
import fileService from '../../services/file';
import folderService from '../../services/folder';
import renderGrid from '../components/_grid';
import modalHelper from '../components/_modal';
import tableHelper from '../components/_table';
import ready, { convertToJSONString } from '../utilities/_helper';

declare var $: any;

const indexLinkFolder: number[] = JSON.parse(
  localStorage.getItem('indexLinkFolder') || '[1]',
);

const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;

ready(() => {
  renderGrid();
});

$(document).ready(() => {
  // Waiting loading content
  $('.table-container').html('Loading...');
  $('#container-header-title').html('Loading...');

  // hide icon back when there is a root folder
  if (indexLinkFolder.length === 1) {
    $('#backIcon').hide();
  }

  folderService.getById(indexFolder).then(folder => {
    $('.table-container').html(
      folder !== undefined ? '' : 'Folder not found!',
    );
    $('#container-header-title').html(
      folder !== undefined ? '' : 'Folder not found!',
    );

    if (folder === undefined) return;

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

  $('#btnNewItem').on('click', () => {
    $('#btnSubmit').data('type', 'add');

    modalHelper.setValueForCommonModal('Add', 'folder', '', '', 0);
  });

  // when modal is hidden
  $('#commonModal').on('hidden.bs.modal', () => {
    modalHelper.resetCommonModal();
  });

  // add new item
  $('#btnSubmit').on('click', () => {
    const type = $('#type').val();
    const name = $('#name').val();
    const extension = $('#extension').val();
    const id = parseInt($('#id').val(), 10);
    const btnType = $('#btnSubmit').data('type');

    switch (btnType) {
      case 'add': {
        if (type === 'file') {
          const newFile = FileGenerated({
            name,
            extension,
          });
          modalHelper.setLoadingForSubmitButton(true);

          folderService.addFile(indexFolder, newFile).then(res => {
            if (!res) return;

            modalHelper.setLoadingForSubmitButton(false);
            $('.table-container').append(
              tableHelper.renderTableItem(newFile),
            );

            $('#commonModal').modal('hide');
          });
        } else {
          const newFolder = FolderGenerated({
            name,
          });

          modalHelper.setLoadingForSubmitButton(true);

          folderService.create(indexFolder, newFolder).then(res => {
            modalHelper.setLoadingForSubmitButton(false);
            if (!res) return;

            const $FOLDER_ITEM = tableHelper.renderTableItem(
              newFolder,
            );
            $('.table-container').prepend($FOLDER_ITEM);

            $('#commonModal').modal('hide');
          });
        }
        break;
      }
      case 'edit': {
        if (type === 'file') {
          modalHelper.setLoadingForSubmitButton(true);

          fileService
            .update(indexFolder, {
              modifiedAt: new Date(),
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
            .update(
              id,
              {
                modifiedAt: new Date(),
                name,
              },
              indexFolder,
            )
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
        // statements;
        break;
      }
    }
  });

  $('#type').on('change', () => {
    const type = $('#type').val();

    $('#extension').prop('disabled', type === 'folder');
    $('#commonModal')
      .find('#commonModalLabel')
      .text(`Add ${type}`);
  });
});
