import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import comments from './comments';
import message from "./message";

export default combineReducers({
  posts,
  categories,
  comments,
  message
});