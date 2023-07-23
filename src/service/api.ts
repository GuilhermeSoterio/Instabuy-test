// api/api.js
import axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL

const api = axios.create({
  baseURL: apiUrl
});

export default api;