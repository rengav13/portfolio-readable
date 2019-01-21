import { CLEAR_ERRORS, REQUEST_ERROR } from './types';

export const showErrorMessage = error => ({
  type: REQUEST_ERROR,
  error
});

export const clearMessages = () => ({ type: CLEAR_ERRORS });