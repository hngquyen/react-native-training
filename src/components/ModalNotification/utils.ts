import {AppError} from './constants';

export const formatErrorMessage = (error?: AppError) => {
  if (error !== AppError.NO_ERROR) {
    return 'Failed!';
  }
  return 'Success!';
};
