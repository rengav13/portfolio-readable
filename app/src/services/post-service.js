import API from './api';

export const fetchAll = () => {
  return API.get('posts')
    .then(res => res.data);
};

export const vote = (id, option) => {
  return API.post(`posts/${id}`, { option })
    .then(res => res.data);
};