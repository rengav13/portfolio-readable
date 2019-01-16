import { add, disable, edit, fetchAll, fetchById, vote } from '../services/post';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
export const FILTER_POSTS_SUCCESS = 'FILTER_POSTS_SUCCESS';
export const SORT_POSTS = 'SORT_POSTS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const DISABLE_POST_SUCCESS = 'DISABLE_POST_SUCCESS';

export const fetchPostById = id => dispatch => {
  fetchById(id)
    .then(post => dispatch(fechPostByIdSuccess(post)));
};

const fechPostByIdSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post
});

export const fetchPosts = () => dispatch => {
  fetchAll()
    .then(posts => dispatch(fetchPostsSuccess(posts)));
};

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const votePost = (id, option) => dispatch => {
  vote(id, option)
    .then(post => dispatch(votePostSuccess(post)));
};

const votePostSuccess = post => ({
  type: VOTE_POST_SUCCESS,
  post
});

export const filterPosts = filters => dispatch => {
  fetchAll()
    .then(posts => dispatch(filterPostsSuccess(posts, filters)));
};

const filterPostsSuccess = (posts, filters) =>
  ({
    type: FILTER_POSTS_SUCCESS,
    posts,
    filters
  });

export const sortPosts = sort =>
  ({
    type: SORT_POSTS,
    sort
  });

export const addPost = post => dispatch => {
  add(post)
    .then(post => dispatch(addPostSuccess(post)));
};

const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  post
});

export const editPost = post => dispatch => {
  edit(post)
    .then(post => dispatch(editPostSuccess(post)));
};

const editPostSuccess = post => ({
  type: EDIT_POST_SUCCESS,
  post
});

export const disablePost = id => dispatch => {
  disable(id)
    .then(post => dispatch(disablePostSuccess(post)));
};

const disablePostSuccess = post => ({
  type: DISABLE_POST_SUCCESS,
  post
});