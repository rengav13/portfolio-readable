export const VOTE_POST = 'VOTE_POST';
export const FILTER_POSTS = 'FILTER_POSTS';
export const SORT_POSTS = 'SORT_POSTS';

export const votePost = (id, option) =>
  ({
    type: VOTE_POST,
    id,
    option
  });

export const filterPosts = (filters) =>
  ({
    type: FILTER_POSTS,
    filters
  });

export const sortPosts = (sort) =>
  ({
    type: SORT_POSTS,
    sort
  });
