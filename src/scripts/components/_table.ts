import { File } from '../../models/_file';
import { Folder } from '../../models/_folder';
import folderService from '../../services/folder';
import {
  convertToDateFormat,
  convertToJSONString,
} from '../utilities/_helper';
import modalHelper from './_modal';

declare var $: any;

const indexLinkFolder: number[] = JSON.parse(
  localStorage.getItem('indexLinkFolder') || '[1]',
);

const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;

const renderTableItem = (
  item: (Folder | File) & {
    extension?: string;
  },
) => {
  const isFile = Object.hasOwnProperty.call(item, 'extension');

  // language=HTML
  const tableItem = `
    <div class="table-item" data-id="${item.id}">
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
          <span class="nextFolder">${item.name +
            (item.extension ? `.${item.extension}` : '')}</span>
        </div>
        <div class="w-15 item">
          <span>${convertToDateFormat(item.modifiedAt)}</span>
        </div>
        <div class="w-15 item">
          <span>${item.modifiedBy}</span>
        </div>
        <div class="w-10 item delete-area">
          <i class="fa-regular fa-trash text-black" id="delete-icon"></i></div>
        <div class="w-10 item edit-area">
    <span data-type="${isFile ? 'file' : 'folder'}" data-name="${
    item.name
  }" data-extension="${item.extension}" data-id="${
    item.id
  }" class="edit-icon">
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

      $FOLDER_ITEM.find('.edit-icon').on('click', () => {
        $('#btnSubmit').data('type', 'edit');
        $('#commonModal').modal('show');
        modalHelper.setValueForCommonModal(
          'Edit',
          'folder',
          item.name,
          item.extension,
          item.id,
        );
      });

      $FOLDER_ITEM.find('.nextFolder').on('click', () => {
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
      $FILE_ITEM.find('.edit-icon').on('click', () => {
        $('#btnSubmit').data('type', 'edit');
        $('#commonModal').modal('show');
        modalHelper.setValueForCommonModal(
          'Edit',
          'file',
          item.name,
          item.extension,
          item.id,
        );
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

const tableHelper = {
  renderTableItem,
};

export default tableHelper;
