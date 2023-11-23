import axios from 'axios';

const axiosUrl = axios.create({
  baseURL: 'http://localhost:3001',
});

export default axiosUrl;
