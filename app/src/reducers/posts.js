import _ from 'lodash';

import { isBlank } from '../util/StringUtil';

import {
  ADD_POST_SUCCESS,
  DISABLE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FILTER_POSTS_SUCCESS,
  SORT_POSTS,
  VOTE_POST_SUCCESS
} from "../actions/types";

const posts = (posts = [], action) => {
  switch (action.type) {
    case FILTER_POSTS_SUCCESS:
      const { category } = action.filters;
      return isBlank(category) ? action.posts : action.posts.filter(post => post.category === category);
    case SORT_POSTS:
      const { sort } = action;
      return _.orderBy(posts, sort.sortBy, sort.order);
    case FETCH_POSTS_SUCCESS:
      return action.posts;
    case ADD_POST_SUCCESS:
      return posts.concat(action.post);
    case FETCH_POST_SUCCESS:
    case VOTE_POST_SUCCESS:
    case EDIT_POST_SUCCESS:
    case DISABLE_POST_SUCCESS:
      const { post } = action;
      if (posts.length === 0)
        posts = [ post ];
      return posts.map(newPost => newPost.id === post.id ? post : newPost);
    default:
      return posts;
  }
};

export default posts;