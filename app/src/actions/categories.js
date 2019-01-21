import { getAll } from '../services/commom';
import { getSafe } from '../util/CommomUtil';

import { CATEGORIES_API } from "../services/api";

import { FETCH_CATEGORIES_SUCCESS } from './types';

export const fetchCategories = () => dispatch => {
  getAll(`${CATEGORIES_API}`)
    .then(data => dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      categories: getSafe('categories', data, [])
    }));
};
