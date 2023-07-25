import axios from 'axios';

const apiUrl = "https://api.instabuy.com.br/apiv3/"

const api = axios.create({
  baseURL: apiUrl
});

export default api;