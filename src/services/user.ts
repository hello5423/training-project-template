import axiosClient from '../config/_axios';

const getUserInfo = async () => {
  const response = await axiosClient.get('Auth/me');

  return response.data;
};

const userService = {
  getUserInfo,
};

export default userService;
