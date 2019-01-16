import API from './api';

export const fetchById = id => {
  return API.get(`posts/${id}`)
    .then(res => res.data);
};

export const fetchAll = () => {
  return API.get('posts')
    .then(res => res.data);
};

export const vote = (id, option) => {
  return API.post(`posts/${id}`, { option })
    .then(res => res.data);
};

export const add = post => {
  return API.post(`posts`, post)
    .then(res => res.data);
};

export const edit = post => {
  return API.put(`posts/${post.id}`, post)
    .then(res => res.data);
};

export const disable = id => {
  return API.delete(`posts/${id}`)
    .then(res => res.data);
};