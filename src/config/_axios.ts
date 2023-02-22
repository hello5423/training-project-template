import axios from 'axios';

const API_URL = 'https://localhost:44307/api';

const axiosClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// handle status 401
axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      window.location.href = `${API_URL}/Auth/signin`;
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
