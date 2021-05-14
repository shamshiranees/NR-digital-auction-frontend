import apiAction from './index';
import {
  DATA_FETCH_ERROR,
  FETCH_ALL_BID_DATA,
  SET_BIDDINGS,SET_ALL_BIDS,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
  SET_USER_DATA,
} from './types';
import { sendMessage } from '../../Screens/ActionDetails/SocketIO';


export function getUserData(id) {
  return apiAction({
    url:
      `/user/${id}`,
    method: 'GET',
    onSuccess: setUser,
    onFailure: setOnError,
    label: FETCH_ALL_BID_DATA,
  });
}

export function setUser(data) {
//   var allBids = data.data[0]
 


// const item = JSON.parse(allBids)

console.log("---------ssss",data);
  return {
    type: SET_USER_DATA,
    payload: data,
  };
}




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



export function placeNewBid(data,newbid) {
  return apiAction({
    url:
      `/bidding`,
    method: 'POST',
    data:data,
    onSuccess: ()=>placedNewBidSuccessfull(data,newbid),
    onFailure: setOnError,
    label: FETCH_ALL_BID_DATA,
  });
}

export function placedNewBidSuccessfull(data) {

  console.log("------placedNewBidSuccessfull",data);
  
  
  return {
    type: SET_BIDDINGS,
    payload: data,
  };
}

export function getAuctionBiddings(id) {
  return apiAction({
    url:
      `/bidding/${id}`,
    method: 'GET',
    onSuccess: setBidding,
    onFailure: setOnError,
    label: FETCH_ALL_BID_DATA,
  });
}
export function setBidding(data) {
  var allBids = data.data[0]
 


const item = JSON.parse(allBids)

console.log("---------ssss",item);


  return {
    type: SET_BIDDINGS,
    payload: item,
  };
}

export function setBiddingsOnClick(data) {
  

  return {
    type: SET_BIDDINGS,
    payload: data,
  };
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
