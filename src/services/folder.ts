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
  await new Promise(resolve => setTimeout(resolve, 200));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const currentFolder = folders.find(
    item => item.id === currentFolderIndex,
  );

  if (currentFolder === undefined) {
    return false;
  }

  folders.push(folderItem);

  currentFolder.subFolders.push(folderItem);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const getById = async (id: number) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  return folders.find(item => item.id === id);
};

const addFile = async (id: number, file: File) => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  if (folder === undefined) {
    return false;
  }

  folder.files.push(file);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const removeFile = async (idFolder: number, idFile: number) => {
  // wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));

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

  if (index !== -1) folder.files.splice(index, 1);

  localStorage.setItem('folders', convertToJSONString(folders));

  return true;
};

const update = async (
  id: number,
  input: Partial<Folder>,
  currentFolderIndex: number,
): Promise<Folder | null> => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === id);

  const currentFolder = folders.find(
    item => item.id === currentFolderIndex,
  );

  if (!currentFolder) {
    return null;
  }

  const subFolder = currentFolder.subFolders.find(
    item => item.id === id,
  );

  if (!folder || !subFolder) {
    return null;
  }

  Object.assign(folder, input);
  Object.assign(subFolder, input);

  localStorage.setItem('folders', convertToJSONString(folders));

  return folder;
};

const deleteById = async (
  currentFolderIndex: number,
  folderRemoveId: number,
): Promise<Folder | null> => {
  // wait for 2 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 200));

  const folders: Folder[] = convertToJSON(
    localStorage.getItem('folders') || '[]',
  );

  const folder = folders.find(item => item.id === currentFolderIndex);

  if (!folder) {
    return null;
  }

  const index = folder.subFolders.findIndex(
    item => item.id === folderRemoveId,
  );

  if (index === -1) {
    return null;
  }

  folder.subFolders.splice(index, 1);

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
