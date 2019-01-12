import { combineReducers } from 'redux';

import _ from 'lodash';

import { isBlank } from '../util/StringUtil';

import { FILTER_POSTS, VOTE_POST } from '../actions/index';
import { SORT_POSTS } from "../actions";

const p = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6126ok3ym7mf1p33lnez": {
    id: '6126ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "6ni6yw3ym7mf1p33lnez": {
    id: '6ni6yw3ym7mf1p33lnez',
    timestamp: 1668479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: 100,
    deleted: false,
    commentCount: 0
  },
  "6ni6ok3ym7mf1p33lgsz": {
    id: '6ni6ok3ym7mf1p33lgsz',
    timestamp: 1568479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'udacity',
    voteScore: 80,
    deleted: false,
    commentCount: 0
  }
};

const posts = (posts = p, action) => {
  switch (action.type) {
    case VOTE_POST:
      const { id, option } = action;

      return {
        ...posts,
        [ id ]: {
          ...posts[ id ],
          voteScore: option === 'upVote' ? posts[ id ].voteScore + 1 : posts[ id ].voteScore - 1
        }
      };

    case FILTER_POSTS:
      const { category } = action.filters;
      const newPosts = { ...p };

      if (!isBlank(category)) {
        Object.keys(newPosts)
          .filter(id => newPosts[ id ].category !== category)
          .forEach(id => delete newPosts[ id ]);
      }

      return newPosts;
    case SORT_POSTS:
      const { sort } = action;
      const sortedPosts = _.orderBy(Object.keys(posts).map(id => posts[ id ]), sort.sortBy, sort.order);

      return _.chain(sortedPosts)
        .keyBy('id')
        .value();
    default:
      return posts;
  }
};

export default combineReducers({
  posts
});