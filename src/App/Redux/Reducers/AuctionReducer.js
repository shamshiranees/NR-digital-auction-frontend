import {
  SET_LOGIN_VALUE,
  SET_SIGNUP_VALUE,
  SET_CREATE_AUCTION_VALUE,
  SET_AUCTION_PARAMS_VALUE,
} from "../Actions/types";

const INITIAL_STATE = {
  createAuction: {
    name: "",
    description: "",

    params: {
      "Base Price Bid:": "",
      "Bid Increment:": "",
      "Quantity:": "",
      "Buyers Premium:": "",
      "Item Unit:": "",
    },
  },
  user: {},
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CREATE_AUCTION_VALUE:
      return {
        ...state,
        createAuction: {
          ...state.createAuction,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_AUCTION_PARAMS_VALUE:
      return {
        ...state,
        createAuction: {
          ...state.createAuction,
          params: {
            ...state.createAuction.params,
            [action.payload.name]: action.payload.value,
          },
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
