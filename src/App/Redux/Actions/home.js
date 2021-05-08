import apiAction from './index';
import {
  DATA_FETCH_ERROR,
  FETCH_ALL_BID_DATA,
  SET_CURRENCY_DATA,SET_ALL_BIDS,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
} from './types';

export function fetchActiveBids() {
  return apiAction({
    url:
      '/auctions',
    method: 'GET',
    onSuccess: setAllBidData,
    onFailure: setOnError,
    label: FETCH_ALL_BID_DATA,
  });
}

export function setAllBidData(allBids) {

  var allProjects = []
  for (var key of Object.keys(allBids.data)) {


const data = JSON.parse(allBids.data[key])

allProjects.push(data)
    
}
  return {
    type: SET_ALL_BIDS,
    payload: allProjects,
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
