import axiosClient from '../config/_axios';
import { File } from '../models/_file';
import { Folder } from '../models/_folder';

const create = async (
  currentFolderIndex: string,
  folderItem: Partial<Folder>,
): Promise<Folder> => {
  // Wait for 1 seconds to continue doing
  const response = await axiosClient.post(
    `/Folder`,
    {
      name: folderItem.name,
      modifiedBy: folderItem.modifiedBy,
      parentId: currentFolderIndex,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
};

const getById = async (id: string) => {
  // Wait for 1 seconds to continue doing
  try {
    const response = await axiosClient.get(`/Folder/${id}`, {
      withCredentials: true,
    });

    const folder: Folder = response.data;

    return folder;
  } catch (error) {
    return null;
  }
};

const addFile = async (id: string, file: Partial<File>) => {
  // Wait for 1 seconds to continue doing
  await new Promise(resolve => setTimeout(resolve, 1000));

  const response = await axiosClient.post(`/File`, {
    name: file.name,
    extension: file.extension,
    folderId: id,
    modifiedBy: file.modifiedBy,
  });

  return response.data;
};

const removeFile = async (idFile: string) => {
  // wait for 1 seconds to continue doing

  const response = await axiosClient.delete(`/File/${idFile}`);

  const file = response.data;

  if (!file) {
    return null;
  }

  return true;
};

const update = async (
  id: string,
  input: Partial<Folder>,
): Promise<Folder | null> => {
  // Wait for 1 seconds to continue doing
  const response = await axiosClient.put(`/Folder/${id}`, {
    name: input.name,
    modifiedBy: input.modifiedBy || '',
  });

  const folder = response.data;

  if (!folder) {
    return null;
  }

  return folder;
};

const deleteById = async (
  folderRemoveId: string,
): Promise<Folder | null> => {
  // Wait for 1 seconds to continue doing
  const response = await axiosClient.delete(
    `/Folder/${folderRemoveId}`,
  );

  const folder = response.data;

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
