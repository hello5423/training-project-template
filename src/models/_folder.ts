import { File } from './_file';

export interface Folder {
  id: string;
  name: string;
  files: File[];
  subFolders: Folder[];
  createdAt: Date;
  createdBy: string;
  modifiedAt: Date;
  modifiedBy: string;
}

export const FolderGenerated = (
  folderInput: Partial<Folder>,
): Folder => {
  return {
    id: folderInput.id || '',
    name: folderInput.name || '',
    files: folderInput.files || [],
    subFolders: folderInput.subFolders || [],
    createdAt: folderInput.createdAt || new Date(),
    createdBy: folderInput.createdBy || 'User',
    modifiedAt: folderInput.modifiedAt || new Date(),
    modifiedBy: folderInput.modifiedBy || 'User',
  };
};
