import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'http://10.0.0.138:8080',
  timeout: 10000, 
});

export default apiConfig;
