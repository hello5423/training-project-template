import $ from 'jquery';
import { File } from '../../models/_file';
import { Folder } from '../../models/_folder';
import folderService from '../../services/folder';
import renderGrid from '../components/_grid';
import ready, { convertToDateFormat } from '../utilities/_helper';

ready(() => {
  renderGrid();
});

const renderTableItem = (item: Folder | File) => {
  const tableItem = `<div class="table-item">
  <div class="table-head">
    <div class="w-5 item">
      <i class="fa-thin fa-file desktop-view"></i>
      <span class="mobile-view">File Type</span>
    </div>
    <div class="w-35 item">
      <span
        >Name
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-20 item">
      <span
        >Modified
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-20 item">
      <span
        >Modified By
        <i
          class="fa-light fa-angle-down icon desktop-view gray-icon"
        ></i
      ></span>
    </div>
    <div class="w-20 item">
      <span
        >
        Delete</span
      >
    </div>
  </div>
  <div class="table-section">
    <div class="w-5 item text-end">
      <i class="fa-solid fa-${
        Object.hasOwnProperty.call(item, 'extension')
          ? 'file'
          : 'folder'
      }"></i>
    </div>
    <div class="w-35 item" id="name">
      <span>${item.name}</span>
    </div>
    <div class="w-20 item">
      <span>${convertToDateFormat(item.modifiedAt)}</span>
    </div>
    <div class="w-20 item">
      <span>${item.modifiedBy}</span>
    </div>
    <div class="w-20 item delete-area">
    <i class="fa-regular fa-trash text-black" id="delete-icon"></i></div>
  </div>
</div>`;

  return tableItem;
};

$(() => {
  const indexFolder = parseInt(
    localStorage.getItem('index') || '1',
    10,
  );

  // Render item list after finish loading DOM
  $('.table-container').html('Loading...');
  folderService.getById(indexFolder).then(folder => {
    $('.table-container').html(
      folder !== undefined ? '' : 'Folder not found!',
    );

    if (folder === undefined) return;

    folder.subFolders.forEach(item => {
      const $FOLDER_ITEM = $(renderTableItem(item));

      $FOLDER_ITEM.find('#delete-icon').on('click', () => {
        folderService.deleteById(folder.id).then(() => {
          $FOLDER_ITEM.remove();
        });
      });

      $FOLDER_ITEM.find('#name').on('click', () => {
        localStorage.setItem('index', item.id.toString());

        window.location.href = '/index.html';
      });

      $('.table-container').append($FOLDER_ITEM);
    });

    folder.files.forEach(item => {
      const $FILE_ITEM = $(renderTableItem(item));

      $FILE_ITEM.find('#delete-icon').on('click', () => {
        folderService.removeFile(indexFolder, item.id).then(() => {
          $FILE_ITEM.remove();
        });
      });

      $('.table-container').append($FILE_ITEM);
    });
  });

  // Click New Item button
  $('#new-item').on('click', () => {
    const promptQuery = prompt(
      'Enter type of new item (folder or file)',
    );
    // test with add file first

    if (promptQuery === 'file') {
      const fileTest: File = {
        id: Math.floor(Math.random() * 10000),
        name: 'test',
        extension: 'txt',
        createdAt: new Date(),
        createdBy: 'test',
        modifiedAt: new Date(),
        modifiedBy: 'test',
      };

      folderService.addFile(indexFolder, fileTest).then(res => {
        if (!res) return;

        $('.table-container').append(renderTableItem(fileTest));
      });
    } else if (promptQuery === 'folder') {
      // test with add folder first
      const folderTest: Folder = {
        id: Math.floor(Math.random() * 10000),
        name: `folder${Math.floor(Math.random() * 10000)}`,
        files: [],
        subFolders: [],
        createdAt: new Date(),
        createdBy: 'test',
        modifiedAt: new Date(),
        modifiedBy: 'test',
      };

      folderService.create(indexFolder, folderTest).then(res => {
        if (!res) return;

        const $FOLDER_ITEM = $(renderTableItem(folderTest));

        $FOLDER_ITEM.find('#delete-icon').on('click', () => {
          folderService.deleteById(folderTest.id).then(() => {
            $FOLDER_ITEM.remove();
          });
        });

        $FOLDER_ITEM.find('#name').on('click', () => {
          localStorage.setItem('index', folderTest.id.toString());

          window.location.href = '/index.html';
        });

        $('.table-container').prepend($FOLDER_ITEM);
      });
    } else {
      alert('Please enter folder or file');
    }
  });
});
