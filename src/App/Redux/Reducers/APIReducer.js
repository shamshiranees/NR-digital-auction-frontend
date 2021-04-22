import {API_START, API_ERROR, API_END, CLEAR_API_ERROR} from '../Actions/types';

const INITIAL_STATE = {
  loadingData: false,
  apiError: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        loadingData: true,
      };

    case CLEAR_API_ERROR:
      return {
        ...state,
        apiError: false,
        loadingData: false,
      };
    case API_ERROR:
      return {
        ...state,
        apiError: true,
        loadingData: false,
      };
    case API_END:
      return {
        ...state,
        loadingData: false,
      };
    default:
      return state;
  }
}
