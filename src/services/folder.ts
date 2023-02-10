import { File } from '../models/_file';
import { Folder } from '../models/_folder';
import {
  convertToJSON,
  convertToJSONString,
} from '../scripts/utilities/_helper';

const create = async (
  currentFolderIndex: number,
  folderItem: Folder,
): Promise<boolean> => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const currentFolder = folders.find(
    item => item.id === currentFolderIndex,
  );

  if (!currentFolder) {
    alert('Folder not found');
    return false;
  }

  folders.push(folderItem);

  currentFolder.subFolders.push(folderItem);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const getById = async (id: number) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  return folder;
};

const addFile = async (id: number, file: File) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  if (!folder) {
    alert('Folder not found');
    return false;
  }

  folder.files.push(file);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const removeFile = async (idFolder: number, idFile: number) => {
  // wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === idFolder);

  if (!folder) {
    return false;
  }

  const file = folder.files.find(item => item.id === idFile);

  if (!file) {
    return false;
  }

  const index = folder.files.indexOf(file);

  folder.files.splice(index, 1);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const update = async (
  id: number,
  input: Partial<Folder>,
): Promise<Folder | null> => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  if (!folder) {
    return null;
  }

  Object.assign(folder, input);

  localStorage.setItem('folders', convertToJSONString(folders));

  return folder;
};

const deleteById = async (id: number): Promise<Folder | null> => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  if (!folder) {
    return null;
  }

  const index = folders.indexOf(folder);

  folders.splice(index, 1);

  localStorage.setItem('folders', convertToJSONString(folders));

  return folder;
};

const folderService = {
  create,
  getById,
  update,
  addFile,
  removeFile,
  deleteById,
};

export default folderService;
