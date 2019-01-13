import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Authorization': Math.random()
  }
});

export default API;