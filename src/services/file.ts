import { File } from '../models/_file';
import { Folder } from '../models/_folder';
import {
  convertToJSON,
  convertToJSONString,
} from '../scripts/utilities/_helper';
import folderService from './folder';

const create = async (indexFolder: number, file: File) => {
  // wait for 1 second to continue doing
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
  // Wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return convertToJSON(localStorage.getItem('files') || '[]');
};

const getById = async (id: number) => {
  // Wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const files: File[] = convertToJSON(
    localStorage.getItem('files') || '[]',
  );

  return files.find(file => file.id === id);
};

const update = async (
  currentIdFolder: number,
  input: Partial<File>,
) => {
  // Wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const folder: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const currentFolder = folder.find(
    item => item.id === currentIdFolder,
  );

  if (!currentFolder) {
    return null;
  }

  const file = currentFolder.files.find(item => item.id === input.id);

  if (!file) {
    return null;
  }

  Object.assign(file, input);

  localStorage.setItem('folders', convertToJSONString(folder));

  return file;
};

const fileService = {
  create,
  getAll,
  getById,
  update,
};

export default fileService;
