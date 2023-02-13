import { File } from '../../models/_file';
import { Folder } from '../../models/_folder';
import fileService from '../../services/file';
import folderService from '../../services/folder';
import renderGrid from '../components/_grid';
import ready, {
  convertToDateFormat,
  convertToJSONString,
} from '../utilities/_helper';

declare var $: any;

const indexLinkFolder: number[] = JSON.parse(
  localStorage.getItem('indexLinkFolder') || '[1]',
);

const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;

ready(() => {
  renderGrid();
});

const renderTableItem = (
  item: (Folder | File) & {
    extension?: string;
  },
) => {
  const isFile = Object.hasOwnProperty.call(item, 'extension');

  const tableItem = `<div class="table-item">
  <div class="table-head">
    <div class="w-5 item">
      <i class="fa-thin fa-file desktop-view"></i>
      <span class="mobile-view">File Type</span>
    </div>
    <div class="w-25 item">
      <span
        >Name
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-15 item">
      <span
        >Modified
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-15 item">
      <span
        >Modified By
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-10 item">
      <span
        >
        Delete</span
      >
    </div>
    <div class="w-10 item">
      <span
        >
        Edit</span
      >
    </div>
    <div class="w-20 item desktop-view">
    <span
    ><i class="fa-regular fa-plus icon"></i>
    Add column</span
  >
    </div>
  </div>
  <div class="table-section">
    <div class="w-5 item text-end">
      <i class="fa-solid fa-${isFile ? 'file' : 'folder'}"></i>
    </div>
    <div class="w-25 item">
      <span id="name">${item.name +
        (item.extension ? `.${item.extension}` : '')}</span>
    </div>
    <div class="w-15 item">
      <span id="modifiedAt">${convertToDateFormat(
        item.modifiedAt,
      )}</span>
    </div>
    <div class="w-15 item">
      <span>${item.modifiedBy}</span>
    </div>
    <div class="w-10 item delete-area">
      <i class="fa-regular fa-trash text-black" id="delete-icon"></i></div>
    <div class="w-10 item edit-area">
  <span data-type=${isFile} data-name=${item.name} data-extension=${
    item.extension
  } data-id=${item.id} class="edit-icon">
      <i class="fa-regular fa-pen-to-square"></i></span></div>
    <div class="w-20 item desktop-view"></div>
  </div>
  </div>
</div>`;

  switch (item.extension) {
    case undefined: {
      const $FOLDER_ITEM = $(tableItem);

      $FOLDER_ITEM.find('#delete-icon').on('click', () => {
        folderService.deleteById(indexFolder, item.id).then(() => {
          $FOLDER_ITEM.remove();
        });
      });

      $FOLDER_ITEM.find('#name').on('click', () => {
        localStorage.setItem('index', item.id.toString());

        indexLinkFolder.push(item.id);

        localStorage.setItem(
          'indexLinkFolder',
          convertToJSONString(indexLinkFolder),
        );

        window.location.reload();
      });

      return $FOLDER_ITEM;
    }
    default: {
      const $FILE_ITEM = $(tableItem);
      $FILE_ITEM.find('#edit-icon').on('click', () => {
        $('#editModal').modal('show');
        $('#editModal')
          .find('#type')
          .val('file');
        $('#editModal')
          .find('#nameInput')
          .val(item.name);
        $('#editModal')
          .find('#extension')
          .prop('disabled', false)
          .val(item.extension);
      });

      $FILE_ITEM.find('#delete-icon').on('click', () => {
        folderService.removeFile(indexFolder, item.id).then(() => {
          $FILE_ITEM.remove();
        });
      });
      return $FILE_ITEM;
    }
  }
};

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
      const $FOLDER_ITEM = renderTableItem(item);

      $('.table-container').append($FOLDER_ITEM);
    });

    folder.files.forEach(item => {
      const $FILE_ITEM = renderTableItem(item);

      $('.table-container').append($FILE_ITEM);
    });

    $('.edit-icon').on('click', function(e: Event) {
      $('#editModal').modal('show');

      const type = $(e.currentTarget).data('type');
      let name = $(e.currentTarget).data('name');
      let extension = $(e.currentTarget).data('extension');
      const id = $(e.currentTarget).data('id');

      if (type) {
        $('#name')
          .find('#type')
          .val('file');
        $('#editModal')
          .find('#nameInput')
          .val(name);
        $('#editModal')
          .find('#extension')
          .prop('disabled', false)
          .val(extension);

        $('#btnEdit').on('click', () => {
          name = $('#editModal')
            .find('#nameInput')
            .val();
          extension = $('#editModal')
            .find('#extension')
            .val();
          fileService
            .update(indexFolder, {
              modifiedAt: new Date(),
              name,
              extension,
              id,
            })
            .then(() => {
              $('#editModal').modal('hide');

              $(e.currentTarget).data(type, type);
              $(e.currentTarget).data('name', name);
              $(e.currentTarget).data('extension', extension);

              $(e.currentTarget)
                .closest('.table-section')
                .find('#name')
                .text(`${name}.${extension}`);
              $(e.currentTarget)
                .closest('.table-section')
                .find('#modifiedAt')
                .text(convertToDateFormat(new Date()));
              $(e.currentTarget)
                .closest('.table-section')
                .find('#extension')
                .text(extension);
            });
        });
      } else {
        $('#editModal')
          .find('#type')
          .val('folder');
        $('#editModal')
          .find('#nameInput')
          .val(name);
        $('#editModal')
          .find('#extension')
          .prop('disabled', true)
          .val('');

        $('#btnEdit').on('click', () => {
          name = $('#editModal')
            .find('#nameInput')
            .val();

          folderService
            .update(
              id,
              {
                modifiedAt: new Date(),
                name,
              },
              indexFolder,
            )
            .then(() => {
              $('#editModal').modal('hide');

              // set data item
              $(e.currentTarget).data('type', type);
              $(e.currentTarget).data('name', name);
              $(e.currentTarget).data('extension', extension);

              $(e.currentTarget)
                .closest('.table-section')
                .find('#name')
                .text(name);
              $(e.currentTarget)
                .closest('.table-section')
                .find('#modifiedAt')
                .text(convertToDateFormat(new Date()));
            });
        });
      }

      $('editModal').modal('hide');
    });
  });

  $('#new-item').on('click', () => {
    $('#exampleModal').modal('show');
  });

  $('#btnAddItem').on('click', () => {
    const type = $('#type').val();
    const name = $('#nameInput').val();
    const extension = $('#extension').val();

    if (type === 'file') {
      const newFile: File = {
        id: Math.floor(Math.random() * 10000),
        name,
        extension,
        createdAt: new Date(),
        createdBy: 'User',
        modifiedAt: new Date(),
        modifiedBy: 'User',
      };

      folderService.addFile(indexFolder, newFile).then(res => {
        if (!res) return;

        $('.table-container').append(renderTableItem(newFile));
      });
    } else {
      const newFolder: Folder = {
        id: Math.floor(Math.random() * 10000),
        name,
        files: [],
        subFolders: [],
        createdAt: new Date(),
        createdBy: 'User',
        modifiedAt: new Date(),
        modifiedBy: 'User',
      };

      folderService.create(indexFolder, newFolder).then(res => {
        if (!res) return;

        const $FOLDER_ITEM = renderTableItem(newFolder);

        $('.table-container').prepend($FOLDER_ITEM);
      });
    }

    $('#exampleModal')
      .modal('hide')
      .reset();
  });

  $('#type').on('change', () => {
    const type = $('#type').val();

    if (type === 'file') {
      $('#extension').prop('disabled', false);
    } else {
      $('#extension').prop('disabled', true);
    }
  });
});
