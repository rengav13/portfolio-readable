import { fetchAll } from "../services/category";
import { FETCH_CATEGORIES_SUCCESS } from './types';

export const fetchCategories = () => dispatch => {
  fetchAll()
    .then(({ categories }) => dispatch(fetchCategoriesSuccess(categories)));
};

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});