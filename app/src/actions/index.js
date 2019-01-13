import { fetchAll, vote } from '../services/post-service';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
export const FILTER_POSTS_SUCCESS = 'FILTER_POSTS_SUCCESS';
export const SORT_POSTS = 'SORT_POSTS';

export const fetchPosts = () => dispatch => {
  fetchAll()
    .then(posts => dispatch(fetchPostsSuccess(posts)));
};

const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const votePost = (id, option) => dispatch => {
  vote(id, option)
    .then(post => dispatch(votePostSuccess(post)));
};

const votePostSuccess = (post) => ({
  type: VOTE_POST_SUCCESS,
  post
});

export const filterPosts = (filters) => dispatch => {
  fetchAll()
    .then(posts => dispatch(filterPostsSuccess(posts, filters)));
};

const filterPostsSuccess = (posts, filters) =>
  ({
    type: FILTER_POSTS_SUCCESS,
    posts,
    filters
  });

export const sortPosts = (sort) =>
  ({
    type: SORT_POSTS,
    sort
  });