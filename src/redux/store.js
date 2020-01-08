import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducer";
import bbReducer from "./breakingBadReducer";
import promise from "redux-promise-middleware";

const rootReducer = combineReducers({ mainReducer: reducer, bbReducer });

export default createStore(rootReducer, applyMiddleware(promise));
