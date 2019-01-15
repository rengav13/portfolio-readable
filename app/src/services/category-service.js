import API from './api';

export const fetchAll = () => {
  return API.get('categories')
    .then(res => res.data);
};