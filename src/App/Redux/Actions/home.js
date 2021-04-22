import apiAction from './index';
import {
  DATA_FETCH_ERROR,
  FETCH_CURRENCY_DATA,
  SET_CURRENCY_DATA,SET_ALL_PROJECTS,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
} from './types';

// export function fetchCurrencyData() {
//   return apiAction({
//     url:
//       '/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours',
//     method: 'GET',
//     onSuccess: setCurrencyData,
//     onFailure: setOnError,
//     label: FETCH_CURRENCY_DATA,
//   });
// }

export function setAllProjectData(data) {
  return {
    type: SET_ALL_PROJECTS,
    payload: data,
  };
}
export function addNewCurrency(data) {
  return {
    type: ADD_CURRENCY,
    payload: data,
  };
}

export function removeCurrency(data) {
  return {
    type: REMOVE_CURRENCY,
    payload: data,
  };
}
function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: 'error',
  };
}
