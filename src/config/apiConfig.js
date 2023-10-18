import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'http://192.168.0.135:8080',
  timeout: 10000, 
});

export default apiConfig;
