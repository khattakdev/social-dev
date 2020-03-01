import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/store";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";

const store = createStore(reducer, composeWithDevTools());
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
