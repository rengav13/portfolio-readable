import axios from 'axios';
import store from '../store';
import { showErrorMessage } from "../actions/error";

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

API.interceptors.response.use(onSuccess, onError);

function onSuccess({ data }) {
  return data;
}

function onError(error) {
  store.dispatch(showErrorMessage(error.message));
  return null;
}