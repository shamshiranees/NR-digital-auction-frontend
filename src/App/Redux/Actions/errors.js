import {ERROR} from './types';
// import {recordApiError} from '../errors/crashlyticsErrors';

export const clearError = () => {
  return setError(undefined);
};

export const setError = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const processException = (error, dispatch) => {
  const {response, request, message: errorMessage} = error;
  let message = message;
  let status = -1;

  if (response) {
    const {data, status: responseStatus, headers} = response;
    const {error, error_description} = data || {};

    status = responseStatus;
    message = error_description || errorMessage;
  } else if (request) {
    message = `${request}`;
  } else {
    message = `${errorMessage}`;
  }

  const {data} = request || {};

  // dispatch(recordApiError(status, message, data || {}, error));

  return {message, status};
};
