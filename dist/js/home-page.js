/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/models/_file.ts":
/*!*****************************!*\
  !*** ./src/models/_file.ts ***!
  \*****************************/
/*! exports provided: FileGenerated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileGenerated", function() { return FileGenerated; });
const FileGenerated = fileInput => {
  return {
    id: fileInput.id || Math.floor(Math.random() * 10000),
    name: fileInput.name || '',
    extension: fileInput.extension || '',
    createdAt: fileInput.createdAt || new Date(),
    createdBy: fileInput.createdBy || 'User',
    modifiedAt: fileInput.modifiedAt || new Date(),
    modifiedBy: fileInput.modifiedBy || 'User'
  };
};

/***/ }),

/***/ "./src/models/_folder.ts":
/*!*******************************!*\
  !*** ./src/models/_folder.ts ***!
  \*******************************/
/*! exports provided: FolderGenerated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderGenerated", function() { return FolderGenerated; });
const FolderGenerated = folderInput => {
  return {
    id: folderInput.id || Math.floor(Math.random() * 10000),
    name: folderInput.name || '',
    files: folderInput.files || [],
    subFolders: folderInput.subFolders || [],
    createdAt: folderInput.createdAt || new Date(),
    createdBy: folderInput.createdBy || 'User',
    modifiedAt: folderInput.modifiedAt || new Date(),
    modifiedBy: folderInput.modifiedBy || 'User'
  };
};

/***/ }),

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderGrid = () => {
  // TODO: implement code to Render grid
};
/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/components/_modal.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/_modal.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const resetCommonModal = () => {
  $('#commonModal').find('#name').val('');
  $('#commonModal').find('#extension').prop('disabled', true).val('');
  $('#commonModal').find('#type').val('folder');
};
const setValueForCommonModal = (functionName, type, name, extension, id) => {
  $('#commonModal').modal('show');
  $('#commonModal').find('#commonModalLabel').text(`${functionName} ${type}`);
  $('#commonModal').find('#type').val(type).prop('disabled', functionName === 'Edit');
  $('#commonModal').find('#name').val(name);
  $('#commonModal').find('#extension').prop('disabled', type === 'folder').val(extension || '');
  $('#commonModal').find('#id').val(id || '');
};
const setLoadingForSubmitButton = isLoading => {
  $('#commonModal').find('#btnSubmit').prop('disabled', isLoading).text(isLoading ? 'Loading...' : 'Submit');
};
const modalHelper = {
  resetCommonModal,
  setValueForCommonModal,
  setLoadingForSubmitButton
};
/* harmony default export */ __webpack_exports__["default"] = (modalHelper);

/***/ }),

/***/ "./src/scripts/components/_table.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/_table.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/folder */ "./src/services/folder.ts");
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modal */ "./src/scripts/components/_modal.ts");



const indexLinkFolder = JSON.parse(localStorage.getItem('indexLinkFolder') || '[1]');
const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;
const renderTableItem = item => {
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
          <span class="nextFolder">${item.name + (item.extension ? `.${item.extension}` : '')}</span>
        </div>
        <div class="w-15 item">
          <span>${Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_1__["convertToDateFormat"])(item.modifiedAt)}</span>
        </div>
        <div class="w-15 item">
          <span>${item.modifiedBy}</span>
        </div>
        <div class="w-10 item delete-area">
          <i class="fa-regular fa-trash text-black" id="delete-icon"></i></div>
        <div class="w-10 item edit-area">
    <span data-type="${isFile ? 'file' : 'folder'}" data-name="${item.name}" data-extension="${item.extension}" data-id="${item.id}" class="edit-icon">
        <i class="fa-regular fa-pen-to-square"></i></span></div>
        <div class="w-20 item desktop-view"></div>
      </div>
    </div>
    </div>`;
  switch (item.extension) {
    case undefined:
      {
        const $FOLDER_ITEM = $(tableItem);
        $FOLDER_ITEM.find('#delete-icon').on('click', () => {
          _services_folder__WEBPACK_IMPORTED_MODULE_0__["default"].deleteById(indexFolder, item.id).then(() => {
            $FOLDER_ITEM.remove();
          });
        });
        $FOLDER_ITEM.find('.edit-icon').on('click', () => {
          $('#btnSubmit').data('type', 'edit');
          $('#commonModal').modal('show');
          _modal__WEBPACK_IMPORTED_MODULE_2__["default"].setValueForCommonModal('Edit', 'folder', item.name, item.extension, item.id);
        });
        $FOLDER_ITEM.find('.nextFolder').on('click', () => {
          indexLinkFolder.push(item.id);
          localStorage.setItem('indexLinkFolder', Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_1__["convertToJSONString"])(indexLinkFolder));
          window.location.reload();
        });
        return $FOLDER_ITEM;
      }
    default:
      {
        const $FILE_ITEM = $(tableItem);
        $FILE_ITEM.find('.edit-icon').on('click', () => {
          $('#btnSubmit').data('type', 'edit');
          $('#commonModal').modal('show');
          _modal__WEBPACK_IMPORTED_MODULE_2__["default"].setValueForCommonModal('Edit', 'file', item.name, item.extension, item.id);
        });
        $FILE_ITEM.find('#delete-icon').on('click', () => {
          _services_folder__WEBPACK_IMPORTED_MODULE_0__["default"].removeFile(indexFolder, item.id).then(() => {
            $FILE_ITEM.remove();
          });
        });
        return $FILE_ITEM;
      }
  }
};
const tableHelper = {
  renderTableItem
};
/* harmony default export */ __webpack_exports__["default"] = (tableHelper);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/_file */ "./src/models/_file.ts");
/* harmony import */ var _models_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/_folder */ "./src/models/_folder.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file */ "./src/services/file.ts");
/* harmony import */ var _services_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/folder */ "./src/services/folder.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_modal */ "./src/scripts/components/_modal.ts");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_table */ "./src/scripts/components/_table.ts");
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");








const indexLinkFolder = JSON.parse(localStorage.getItem('indexLinkFolder') || '[1]');
const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;
Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
$(document).ready(() => {
  // Waiting loading content
  $('.table-container').html('Loading...');
  $('#container-header-title').html('Loading...');
  // hide icon back when there is a root folder
  if (indexLinkFolder.length === 1) {
    $('#backIcon').hide();
  }
  _services_folder__WEBPACK_IMPORTED_MODULE_3__["default"].getById(indexFolder).then(folder => {
    $('.table-container').html(folder !== undefined ? '' : 'Folder not found!');
    $('#container-header-title').html(folder !== undefined ? '' : 'Folder not found!');
    if (folder === undefined) return;
    $('#backIcon').on('click', () => {
      indexLinkFolder.pop();
      localStorage.setItem('indexLinkFolder', Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_7__["convertToJSONString"])(indexLinkFolder));
      window.location.reload();
    });
    $('#container-header-title').text(folder.name);
    folder.subFolders.forEach(item => {
      const $FOLDER_ITEM = _components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(item);
      $('.table-container').append($FOLDER_ITEM);
    });
    folder.files.forEach(item => {
      const $FILE_ITEM = _components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(item);
      $('.table-container').append($FILE_ITEM);
    });
  });
  $('#btnNewItem').on('click', () => {
    $('#btnSubmit').data('type', 'add');
    _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setValueForCommonModal('Add', 'folder', '', '', 0);
  });
  // when modal is hidden
  $('#commonModal').on('hidden.bs.modal', () => {
    _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].resetCommonModal();
  });
  // add new item
  $('#btnSubmit').on('click', () => {
    const type = $('#type').val();
    const name = $('#name').val();
    const extension = $('#extension').val();
    const id = parseInt($('#id').val(), 10);
    const btnType = $('#btnSubmit').data('type');
    switch (btnType) {
      case 'add':
        {
          if (type === 'file') {
            const newFile = Object(_models_file__WEBPACK_IMPORTED_MODULE_0__["FileGenerated"])({
              name,
              extension
            });
            _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(true);
            _services_folder__WEBPACK_IMPORTED_MODULE_3__["default"].addFile(indexFolder, newFile).then(res => {
              if (!res) return;
              _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(false);
              $('.table-container').append(_components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(newFile));
              $('#commonModal').modal('hide');
            });
          } else {
            const newFolder = Object(_models_folder__WEBPACK_IMPORTED_MODULE_1__["FolderGenerated"])({
              name
            });
            _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(true);
            _services_folder__WEBPACK_IMPORTED_MODULE_3__["default"].create(indexFolder, newFolder).then(res => {
              _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(false);
              if (!res) return;
              const $FOLDER_ITEM = _components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(newFolder);
              $('.table-container').prepend($FOLDER_ITEM);
              $('#commonModal').modal('hide');
            });
          }
          break;
        }
      case 'edit':
        {
          if (type === 'file') {
            _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(true);
            _services_file__WEBPACK_IMPORTED_MODULE_2__["default"].update(indexFolder, {
              modifiedAt: new Date(),
              name,
              extension,
              id
            }).then(res => {
              _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(false);
              if (!res) return;
              const $FILE_ITEM = _components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(res);
              $(`.table-item[data-id="${id}"]`).replaceWith($FILE_ITEM);
              $('#commonModal').modal('hide');
            });
          }
          // Edit folder
          else {
            _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(true);
            _services_folder__WEBPACK_IMPORTED_MODULE_3__["default"].update(id, {
              modifiedAt: new Date(),
              name
            }, indexFolder).then(res => {
              if (!res) return;
              _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"].setLoadingForSubmitButton(false);
              const $FOLDER_ITEM = _components_table__WEBPACK_IMPORTED_MODULE_6__["default"].renderTableItem(res);
              $(`.table-item[data-id="${id}"]`).replaceWith($FOLDER_ITEM);
              $('#commonModal').modal('hide');
            });
          }
          break;
        }
      default:
        {
          // statements;
          break;
        }
    }
  });
  $('#type').on('change', () => {
    const type = $('#type').val();
    $('#extension').prop('disabled', type === 'folder');
    $('#commonModal').find('#commonModalLabel').text(`Add ${type}`);
  });
});

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: convertToJSON, convertToJSONString, convertToDateFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToJSON", function() { return convertToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToJSONString", function() { return convertToJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToDateFormat", function() { return convertToDateFormat; });
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};
const convertToJSON = json => {
  return JSON.parse(json);
};
const convertToJSONString = obj => {
  return JSON.stringify(obj);
};
const convertToDateFormat = input => {
  const date = new Date(input);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/services/file.ts":
/*!******************************!*\
  !*** ./src/services/file.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/services/folder.ts");


const create = async (indexFolder, file) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));
  const hasAddedFileToFolder = await _folder__WEBPACK_IMPORTED_MODULE_1__["default"].addFile(indexFolder, file);
  if (!hasAddedFileToFolder) {
    return null;
  }
  const files = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('files') || '[]');
  files.push(file);
  localStorage.setItem('files', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(files));
  return file;
};
const getAll = async () => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));
  return Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('files') || '[]');
};
const getById = async id => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));
  const files = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('files') || '[]');
  return files.find(file => file.id === id);
};
const update = async (currentIdFolder, input) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));
  const folder = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const currentFolder = folder.find(item => item.id === currentIdFolder);
  if (!currentFolder) {
    return null;
  }
  const file = currentFolder.files.find(item => item.id === input.id);
  if (!file) {
    return null;
  }
  Object.assign(file, input);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folder));
  return file;
};
const fileService = {
  create,
  getAll,
  getById,
  update
};
/* harmony default export */ __webpack_exports__["default"] = (fileService);

/***/ }),

/***/ "./src/services/folder.ts":
/*!********************************!*\
  !*** ./src/services/folder.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/utilities/_helper */ "./src/scripts/utilities/_helper.ts");

const create = async (currentFolderIndex, folderItem) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const currentFolder = folders.find(item => item.id === currentFolderIndex);
  if (currentFolder === undefined) {
    return false;
  }
  folders.push(folderItem);
  currentFolder.subFolders.push(folderItem);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folders));
  return true;
};
const getById = async id => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  return folders.find(item => item.id === id);
};
const addFile = async (id, file) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const folder = folders.find(item => item.id === id);
  if (folder === undefined) {
    return false;
  }
  folder.files.push(file);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folders));
  return true;
};
const removeFile = async (idFolder, idFile) => {
  // wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const folder = folders.find(item => item.id === idFolder);
  if (!folder) {
    return false;
  }
  const file = folder.files.find(item => item.id === idFile);
  if (!file) {
    return false;
  }
  const index = folder.files.indexOf(file);
  if (index !== -1) folder.files.splice(index, 1);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folders));
  return true;
};
const update = async (id, input, currentFolderIndex) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const folder = folders.find(item => item.id === id);
  const currentFolder = folders.find(item => item.id === currentFolderIndex);
  if (!currentFolder) {
    return null;
  }
  const subFolder = currentFolder.subFolders.find(item => item.id === id);
  if (!folder || !subFolder) {
    return null;
  }
  Object.assign(folder, input);
  Object.assign(subFolder, input);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folders));
  return folder;
};
const deleteById = async (currentFolderIndex, folderRemoveId) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const folder = folders.find(item => item.id === currentFolderIndex);
  if (!folder) {
    return null;
  }
  const index = folder.subFolders.findIndex(item => item.id === folderRemoveId);
  if (index === -1) {
    return null;
  }
  folder.subFolders.splice(index, 1);
  localStorage.setItem('folders', Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSONString"])(folders));
  return folder;
};
const folderService = {
  create,
  getById,
  update,
  addFile,
  removeFile,
  deleteById
};
/* harmony default export */ __webpack_exports__["default"] = (folderService);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map