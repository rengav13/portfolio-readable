import { add, getAllByPost, vote } from "../services/comment";

import { remove, update } from "../services/commom";

import { COMMENTS_API } from "../services/api";

import {
  ADD_COMMENT_SUCCESS,
  DISABLE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  FETCH_COMMENTS_BY_POST_SUCCESS,
  VOTE_COMMENT_SUCCESS
} from './types';

export const fetchCommentsByPost = postId => dispatch => {
  getAllByPost(postId)
    .then(comments => {
      dispatch({ type: FETCH_COMMENTS_BY_POST_SUCCESS, comments });
    });
};

export const addComment = (post, comment) => dispatch => {
  add(post, comment)
    .then(comment => {
      dispatch({ type: ADD_COMMENT_SUCCESS, comment });
    });
};

export const voteComment = (id, option) => dispatch => {
  vote(id, option)
    .then(comment => {
      dispatch({ type: VOTE_COMMENT_SUCCESS, comment });
    });
};

export const editComment = comment => dispatch => {
  update(COMMENTS_API, comment)
    .then(comment => {
      dispatch({ type: EDIT_COMMENT_SUCCESS, comment });
    });
};

export const disableComment = id => dispatch => {
  remove(COMMENTS_API, id)
    .then(comment => dispatch({ type: DISABLE_COMMENT_SUCCESS, comment }));
};
