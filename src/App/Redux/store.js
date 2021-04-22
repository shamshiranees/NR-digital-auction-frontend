import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./Reducers"
import apiMiddleware from "./Middleware/api"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"

const logger = createLogger()
const releaseMiddleware = [apiMiddleware, thunk]
//const devMiddleware = [...releaseMiddleware, logger];
const selectedMiddleware = releaseMiddleware

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...selectedMiddleware))
)
window.store = store
export default store
