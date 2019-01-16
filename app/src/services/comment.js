import API from './api';
import { newKey } from "../util/StringUtil";

export const fetchAllByPost = (id) => {
  return API.get(`posts/${id}/comments`)
    .then(res => res.data);
};

export const add = (post, comment) => {
  return API.post('comments', {
    id: newKey(),
    timestamp: new Date().getTime(),
    body: comment,
    author: post.author,
    parentId: post.id,
  })
    .then(res => res.data);
};

export const vote = (id, option) => {
  return API.post(`comments/${id}`, { option })
    .then(res => res.data);
};

export const edit = comment => {
  return API.put(`comments/${comment.id}`, comment)
    .then(res => res.data);
};

export const disable = id => {
  return API.delete(`comments/${id}`)
    .then(res => res.data);
};