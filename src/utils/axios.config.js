import axios from 'axios'
import router from '@/router';

const defaultOptions = {
  baseURL: import.meta.env.VUE_APP_BASE_API,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
};

let axiosInstance = axios.create(defaultOptions);
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token") || "";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(null, function (error) {
  if (error.response.status === 401) {
    localStorage.removeItem("token");
    router.push("/Login");
  }
  return Promise.reject(error);
});

export default axiosInstance;