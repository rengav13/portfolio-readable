import { FETCH_CATEGORIES_SUCCESS } from "../actions/types";

const categories = (categories = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return categories;
  }
};

export default categories;