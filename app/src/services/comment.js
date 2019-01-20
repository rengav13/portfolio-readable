import { API, COMMENTS_API, POSTS_API } from './api';
import { newKey } from '../util/StringUtil';

export const getAllByPost = id => API.get(`${POSTS_API}/${id}/${COMMENTS_API}`);

export const add = (post, comment) => {
  return API.post(`${COMMENTS_API}`, {
    id: newKey(),
    timestamp: new Date().getTime(),
    body: comment,
    author: post.author,
    parentId: post.id,
  });
};

export const vote = (id, option) => API.post(`${COMMENTS_API}/${id}`, { option });