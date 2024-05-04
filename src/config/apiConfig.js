import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'localhost:8080',
  timeout: 5000, 
});

export default apiConfig;
