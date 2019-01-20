import { add, disable, edit, fetchAll, fetchById, vote } from '../services/post';

import {
  ADD_POST_SUCCESS,
  DISABLE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FILTER_POSTS_SUCCESS,
  SORT_POSTS,
  VOTE_POST_SUCCESS
} from './types';

export const fetchPostById = id => dispatch => {
  fetchById(id)
    .then(post => {
      dispatch({ type: FETCH_POST_SUCCESS, post });
    });
};

export const fetchPosts = () => dispatch => {
  fetchAll()
    .then(posts => {
      dispatch({ type: FETCH_POSTS_SUCCESS, posts });
    });
};

export const votePost = (id, option) => dispatch => {
  vote(id, option)
    .then(post => {
      dispatch({ type: VOTE_POST_SUCCESS, post });
    });
};

export const filterPosts = filters => dispatch => {
  fetchAll()
    .then(posts => {
      dispatch({ type: FILTER_POSTS_SUCCESS, posts, filters });
    });
};

export const addPost = post => dispatch => {
  add(post)
    .then(post => {
      dispatch({ type: ADD_POST_SUCCESS, post });
    });
};

export const editPost = post => dispatch => {
  edit(post)
    .then(post => {
      dispatch({ type: EDIT_POST_SUCCESS, post });
    });
};

export const disablePost = id => dispatch => {
  disable(id)
    .then(post => {
      dispatch({ type: DISABLE_POST_SUCCESS, post });
    });
};

export const sortPosts = sort =>
  ({
    type: SORT_POSTS,
    sort
  });
