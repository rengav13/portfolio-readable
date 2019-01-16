import { add, disable, edit, fetchAllByPost, vote } from "../services/comment";

export const FETCH_COMMENTS_BY_POST_SUCCESS = 'FETCH_COMMENTS_BY_POST_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const DISABLE_COMMENT_SUCCESS = 'DISABLE_COMMENT_SUCCESS';

export const fetchCommentsByPost = postId => dispatch => {
  fetchAllByPost(postId)
    .then(comments => dispatch(fetchCommentsByPostSuccess(comments)));
};

export const fetchCommentsByPostSuccess = comments => ({
  type: FETCH_COMMENTS_BY_POST_SUCCESS,
  comments
});

export const addComment = (post, comment) => dispatch => {
  add(post, comment)
    .then(comment => dispatch(addCommentSuccess(comment)));
};

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  comment
});

export const voteComment = (id, option) => dispatch => {
  vote(id, option)
    .then(comment => dispatch(voteComentSuccess(comment)));
};

export const voteComentSuccess = comment => ({
  type: VOTE_COMMENT_SUCCESS,
  comment
});

export const editComment = comment => dispatch => {
  edit(comment)
    .then(comment => dispatch(editCommentSuccess(comment)));
};

export const editCommentSuccess = comment => ({
  type: EDIT_COMMENT_SUCCESS,
  comment
});

export const disableComment = id => dispatch => {
  disable(id)
    .then(comment => dispatch(disableCommentSuccess(comment)));
};

export const disableCommentSuccess = comment => ({
  type: DISABLE_COMMENT_SUCCESS,
  comment
});