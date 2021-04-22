import { SET_LOGIN_VALUE, SET_SIGNUP_VALUE,SET_USER_DATA } from "./types";

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
  