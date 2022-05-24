// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { logger } from "redux-logger";
import productReducers from "./product.reducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
 
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
 
const middlewares = [promise, thunk, logger];

// let composeEnhancers = compose;

// if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// }

// export const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(productReducers); 
export const store = createStore(
    productReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
)

// export const store = createStore(productReducers);
// export default store;