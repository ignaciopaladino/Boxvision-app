import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import authReducer from "./app/reducers/authReducer";
import productReducer from "./app/reducers/productReducer";
import ordersReducer from "./app/reducers/ordersReducer";

export default createStore(
  combineReducers({
    productReducer,
    authReducer,
    ordersReducer
  }),
  {},
  applyMiddleware(logger, thunk, promise())
);
