import { File } from './_file';

export interface Folder {
  id: number;
  name: string;
  files: File[];
  subFolders: Folder[];
  createdAt: Date;
  createdBy: string;
  modifiedAt: Date;
  modifiedBy: string;
}
