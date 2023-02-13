export interface File {
  id: number;
  name: string;
  extension: string;
  createdAt: Date;
  createdBy: string;
  modifiedAt: Date;
  modifiedBy: string;
}

export const FileGenerated = (fileInput: Partial<File>): File => {
  return {
    id: fileInput.id || Math.floor(Math.random() * 10000),
    name: fileInput.name || '',
    extension: fileInput.extension || '',
    createdAt: fileInput.createdAt || new Date(),
    createdBy: fileInput.createdBy || 'User',
    modifiedAt: fileInput.modifiedAt || new Date(),
    modifiedBy: fileInput.modifiedBy || 'User',
  };
};
