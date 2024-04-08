//axiosInstance.js
import axios from 'axios';

const baseURL = 'https://back-production-57a7.up.railway.app';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
