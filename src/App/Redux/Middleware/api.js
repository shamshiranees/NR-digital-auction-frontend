// inspired by https://leanpub.com/redux-book
import axios from 'axios';
import {API} from '../Actions/types';
import {accessDenied, apiError, apiStart, apiEnd} from '../Actions/api';

const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE', 'POST'].includes(method)
    ? 'params'
    : 'data';

  //axios default configs
  axios.defaults.baseURL = 'https://data.messari.io/api/v1/';

  axios({
    method: method,
    url: url,
    data: data,
  })
    .then((result) => {
      console.log('ooooo', result);

      dispatch(onSuccess(result.data));
    })
    .catch((error) => {
      console.log('error', error);

      dispatch(apiError(error.response.status));
      dispatch(onFailure(error));

      // if (error.response && error.response.status === 403) {
      //   dispatch(accessDenied(window.location.pathname));
      // }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
