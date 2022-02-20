
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers"

const middlewares = [thunkMiddleware]
const logger = createLogger({ collapsed: true })
middlewares.push(logger)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
    )



export default store
