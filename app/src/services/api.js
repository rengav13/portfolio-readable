import axios from 'axios';

export const POSTS_API = 'posts';
export const COMMENTS_API = 'comments';
export const CATEGORIES_API = 'categories';

export const API = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 5000,
  headers: {
    'Authorization': 1
  }
});

API.interceptors.response.use(({ data }) => data);