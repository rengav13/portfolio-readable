import { getAll } from '../services/commom';

import { CATEGORIES_API } from "../services/api";

import { FETCH_CATEGORIES_SUCCESS } from './types';

export const fetchCategories = () => dispatch => {
  getAll(`${CATEGORIES_API}`)
    .then(({ categories }) => dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories }));
};
