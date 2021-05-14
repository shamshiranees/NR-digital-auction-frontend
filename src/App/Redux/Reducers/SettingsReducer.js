import { SET_SETTINGS, GET_SETTINGS } from "../Actions/types"

const INITIAL_STATE = {
  all: null,
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SETTINGS:
      return { ...state, all: action.payload }
    case SET_SETTINGS:
      return {
        ...state,
        all: action.payload != null ? action.payload : state.all,
      }
    default:
      return state
  }
}
