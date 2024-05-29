import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://8968-182-48-214-18.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    // const token = 'auth-token';
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle global errors
    if (error?.response?.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  },
);

export default apiClient;
