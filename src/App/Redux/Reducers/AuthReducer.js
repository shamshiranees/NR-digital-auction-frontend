import {
  SET_LOGIN_VALUE,
  SET_SIGNUP_VALUE,
  SET_USER_DATA,
} from "../Actions/types";

const INITIAL_STATE = {
  loginVal: {
    username: "",
    password: "",
  },
  signUpVal: {
    username: "",
    password: "",
    email: "",
    mobile: "",
    fullName: "",
    type: "",
    code: "",
  },
  user: {},
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOGIN_VALUE:
      return {
        ...state,
        loginVal: {
          ...state.loginVal,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_SIGNUP_VALUE:
      return {
        ...state,
        signUpVal: {
          ...state.signUpVal,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
}
