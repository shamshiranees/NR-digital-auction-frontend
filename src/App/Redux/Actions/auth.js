import apiAction from './index';
import { SET_LOGIN_VALUE, SET_SIGNUP_VALUE,SET_USER_DATA, 
  DATA_FETCH_ERROR, FETCH_ALL_USER_DATA } from "./types";

export function addNewUser(data) {
  return apiAction({
    url:
      `/users`,
    method: 'POST',
    data:data,
    onSuccess: ()=>addedNewUserSuccessfull(data),
    onFailure: setOnError,
    label: FETCH_ALL_USER_DATA,
  });
}

export function addedNewUserSuccessfull(data) {

  console.log("------addedNewUserSuccessfull",data);
  return {
    type: SET_USER_DATA,
    payload: data,
  };
}

export function setloginValue(data) {
    return {
      type: SET_LOGIN_VALUE,
      payload: data,
    };
  }

  export function setSignupValue(data) {
    return {
      type: SET_SIGNUP_VALUE,
      payload: data,
    };
  }
  export function setUserData(data) {
    return {
      type: SET_USER_DATA,
      payload: data,
    };
  }
  function setOnError() {
    return {
      type: DATA_FETCH_ERROR,
      payload: 'error',
    };
  }
  