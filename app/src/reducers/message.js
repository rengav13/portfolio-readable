import { CLEAR_ERRORS, REQUEST_ERROR } from "../actions/types";

const initialState = {
  lastSeen: 0,
  error: ''
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ERROR:
      return { error: action.error };
    case CLEAR_ERRORS:
      return {
        lastSeen: new Date().getTime(),
        error: ''
      };
    default:
      return state;
  }
};

export default message;