import {
  ADD_COMMENT_SUCCESS,
  DISABLE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  FETCH_COMMENTS_BY_POST_SUCCESS,
  VOTE_COMMENT_SUCCESS
} from "../actions/types";


const comments = (comments = [], action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return [ action.comment ].concat(comments);
    case VOTE_COMMENT_SUCCESS:
    case EDIT_COMMENT_SUCCESS:
      const { comment } = action;
      if (comments.length === 0)
        comments = [ comment ];
      return comments.map(newComment => newComment.id === comment.id ? comment : newComment);
    case DISABLE_COMMENT_SUCCESS:
      return comments.filter(comment => comment.id !== action.comment.id)
    case FETCH_COMMENTS_BY_POST_SUCCESS:
      return action.comments;
    default:
      return comments;
  }
};

export default comments;