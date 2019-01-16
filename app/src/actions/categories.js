import { fetchAll } from "../services/category";

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const fetchCategories = () => dispatch => {
  fetchAll()
    .then(({ categories }) => dispatch(fetchCategoriesSuccess(categories)));
};

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});