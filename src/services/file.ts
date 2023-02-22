import axiosClient from '../config/_axios';
import { File } from '../models/_file';

const update = async (input: Partial<File>) => {
  // Wait for 1 seconds to continue doing
  const response = await axiosClient.put(`/File/${input.id}`, {
    name: input.name,
    extension: input.extension,
    modifiedBy: input.modifiedBy,
  });

  const file = response.data;

  return file;
};

const fileService = {
  update,
};

export default fileService;
