import { API, POSTS_API } from './api';

export const vote = (id, option) => API.post(`${POSTS_API}/${id}`, { option });