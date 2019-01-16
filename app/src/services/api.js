import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Authorization': 1
  }
});

export default API;