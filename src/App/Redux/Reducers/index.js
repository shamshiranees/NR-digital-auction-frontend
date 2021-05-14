import { combineReducers } from "redux"
import HomeReducer from "./HomeReducer"
import APIReducer from "./APIReducer"
import AuthReducer from "./AuthReducer"
import DetailsReducer from "./DetailsReducer"
import ProfileReducer from "./ProfileReducer"
import AuctionReducer from "./AuctionReducer"
import SettingsReducer from "./SettingsReducer"

export default combineReducers({
  auctionReducer: AuctionReducer,
  home: HomeReducer,
  apiReducer: APIReducer,
  authReducer: AuthReducer,
  details: DetailsReducer,
  profile: ProfileReducer,
  settings: SettingsReducer,
})
