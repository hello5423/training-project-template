import { File } from '../models/_file';
import {
  convertToJSON,
  convertToJSONString,
} from '../scripts/utilities/_helper';
import folderService from './folder';

const create = async (indexFolder: number, file: File) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const hasAddedFileToFolder = await folderService.addFile(
    indexFolder,
    file,
  );

  if (!hasAddedFileToFolder) {
    return null;
  }

  const files: File[] = convertToJSON(
    localStorage.getItem('files') || '[]',
  );

  files.push(file);

  localStorage.setItem('files', convertToJSONString(files));

  return file;
};

const getAll = async () => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  return convertToJSON(localStorage.getItem('files') || '[]');
};

const getById = async (id: number) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const files: File[] = convertToJSON(
    localStorage.getItem('files') || '[]',
  );

  return files.find(file => file.id === id);
};

const update = async (id: number, input: Partial<File>) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const files: File[] = convertToJSON(
    localStorage.getItem('files') || '[]',
  );

  const file = files.find(item => item.id === id);

  if (!file) {
    return null;
  }

  Object.assign(file, input);

  localStorage.setItem('files', convertToJSONString(files));

  return file;
};

// const deleteById = async (indexFolder: number, id: number) => {
//   // wait for 2 seconds to continue doing
//   await new Promise(resolve => setTimeout(resolve, 2000));

//   const hasDeletedFileFromFolder = await folderService.removeFile(
//     indexFolder,
//     id,
//   );

//   return hasDeletedFileFromFolder;
// };

const fileService = {
  create,
  getAll,
  getById,
  update,
  // deleteById,
};

export default fileService;
