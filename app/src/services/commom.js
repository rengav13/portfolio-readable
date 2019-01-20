import { API } from './api';

export const getAll = (property) => API.get(`${property}`);

export const get = (property, id) => API.get(`${property}/${id}`);

export const add = (property, object) => API.post(`${property}`, object);

export const update = (property, object) => API.put(`${property}/${object.id}`, object);

export const remove = (property, id) => API.delete(`${property}/${id}`);