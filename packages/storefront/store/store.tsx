// import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";

import rootReducers from './reducers'

const middlewares = [promise, thunk, logger];

export default createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
)