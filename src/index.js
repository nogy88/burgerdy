import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./page/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import burgerReducer from "./redux/reducer/burgerReducer";
import orderReducer from "./redux/reducer/orderReducer";
import signupLoginReducer from "./redux/reducer/signupLoginReducer";
import thunk from "redux-thunk";

const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("myLoggerMiddleware: Dispatching: ==> ", action);
      console.log("myLoggerMiddleware: State BEFORE: ", store.getState());
      const result = next(action);
      console.log("myLoggerMiddleware: State AFTER: ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupLoginReducer,
});

const middlewares = [loggerMiddleware, thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
