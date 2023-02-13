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

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/file */ "./src/services/file.ts");
/* harmony import */ var _services_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/folder */ "./src/services/folder.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");




const indexLinkFolder = JSON.parse(localStorage.getItem('indexLinkFolder') || '[1]');
const indexFolder = indexLinkFolder[indexLinkFolder.length - 1] || 1;
Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
const renderTableItem = item => {
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
      <span id="name">${item.name + (item.extension ? `.${item.extension}` : '')}</span>
    </div>
    <div class="w-15 item">
      <span id="modifiedAt">${Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["convertToDateFormat"])(item.modifiedAt)}</span>
    </div>
    <div class="w-15 item">
      <span>${item.modifiedBy}</span>
    </div>
    <div class="w-10 item delete-area">
      <i class="fa-regular fa-trash text-black" id="delete-icon"></i></div>
    <div class="w-10 item edit-area">
  <span data-type=${isFile} data-name=${item.name} data-extension=${item.extension} data-id=${item.id} class="edit-icon">
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
          _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].deleteById(indexFolder, item.id).then(() => {
            $FOLDER_ITEM.remove();
          });
        });
        $FOLDER_ITEM.find('#name').on('click', () => {
          localStorage.setItem('index', item.id.toString());
          indexLinkFolder.push(item.id);
          localStorage.setItem('indexLinkFolder', Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["convertToJSONString"])(indexLinkFolder));
          window.location.reload();
        });
        return $FOLDER_ITEM;
      }
    default:
      {
        const $FILE_ITEM = $(tableItem);
        $FILE_ITEM.find('#edit-icon').on('click', () => {
          $('#editModal').modal('show');
          $('#editModal').find('#type').val('file');
          $('#editModal').find('#nameInput').val(item.name);
          $('#editModal').find('#extension').prop('disabled', false).val(item.extension);
        });
        $FILE_ITEM.find('#delete-icon').on('click', () => {
          _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].removeFile(indexFolder, item.id).then(() => {
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
  _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].getById(indexFolder).then(folder => {
    $('.table-container').html(folder !== undefined ? '' : 'Folder not found!');
    $('#container-header-title').html(folder !== undefined ? '' : 'Folder not found!');
    if (folder === undefined) return;
    $('#backIcon').on('click', () => {
      indexLinkFolder.pop();
      localStorage.setItem('indexLinkFolder', Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["convertToJSONString"])(indexLinkFolder));
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
    $('.edit-icon').on('click', function (e) {
      $('#editModal').modal('show');
      const type = $(e.currentTarget).data('type');
      let name = $(e.currentTarget).data('name');
      let extension = $(e.currentTarget).data('extension');
      const id = $(e.currentTarget).data('id');
      if (type) {
        $('#name').find('#type').val('file');
        $('#editModal').find('#nameInput').val(name);
        $('#editModal').find('#extension').prop('disabled', false).val(extension);
        $('#btnEdit').on('click', () => {
          name = $('#editModal').find('#nameInput').val();
          extension = $('#editModal').find('#extension').val();
          _services_file__WEBPACK_IMPORTED_MODULE_0__["default"].update(indexFolder, {
            modifiedAt: new Date(),
            name,
            extension,
            id
          }).then(() => {
            $('#editModal').modal('hide');
            $(e.currentTarget).data(type, type);
            $(e.currentTarget).data('name', name);
            $(e.currentTarget).data('extension', extension);
            $(e.currentTarget).closest('.table-section').find('#name').text(`${name}.${extension}`);
            $(e.currentTarget).closest('.table-section').find('#modifiedAt').text(Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["convertToDateFormat"])(new Date()));
            $(e.currentTarget).closest('.table-section').find('#extension').text(extension);
          });
        });
      } else {
        $('#editModal').find('#type').val('folder');
        $('#editModal').find('#nameInput').val(name);
        $('#editModal').find('#extension').prop('disabled', true).val('');
        $('#btnEdit').on('click', () => {
          name = $('#editModal').find('#nameInput').val();
          _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].update(id, {
            modifiedAt: new Date(),
            name
          }, indexFolder).then(() => {
            $('#editModal').modal('hide');
            // set data item
            $(e.currentTarget).data('type', type);
            $(e.currentTarget).data('name', name);
            $(e.currentTarget).data('extension', extension);
            $(e.currentTarget).closest('.table-section').find('#name').text(name);
            $(e.currentTarget).closest('.table-section').find('#modifiedAt').text(Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_3__["convertToDateFormat"])(new Date()));
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
      const newFile = {
        id: Math.floor(Math.random() * 10000),
        name,
        extension,
        createdAt: new Date(),
        createdBy: 'User',
        modifiedAt: new Date(),
        modifiedBy: 'User'
      };
      _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].addFile(indexFolder, newFile).then(res => {
        if (!res) return;
        $('.table-container').append(renderTableItem(newFile));
      });
    } else {
      const newFolder = {
        id: Math.floor(Math.random() * 10000),
        name,
        files: [],
        subFolders: [],
        createdAt: new Date(),
        createdBy: 'User',
        modifiedAt: new Date(),
        modifiedBy: 'User'
      };
      _services_folder__WEBPACK_IMPORTED_MODULE_1__["default"].create(indexFolder, newFolder).then(res => {
        if (!res) return;
        const $FOLDER_ITEM = renderTableItem(newFolder);
        $('.table-container').prepend($FOLDER_ITEM);
      });
    }
    $('#exampleModal').modal('hide').reset();
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
  console.log(folderItem);
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const currentFolder = folders.find(item => item.id === currentFolderIndex);
  if (currentFolder === undefined) {
    alert('Folder not found');
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
  const folder = folders.find(item => item.id === id);
  return folder;
};
const addFile = async (id, file) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));
  const folders = Object(_scripts_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["convertToJSON"])(localStorage.getItem('folders') || '[]');
  const folder = folders.find(item => item.id === id);
  if (folder === undefined) {
    alert('Folder not found');
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