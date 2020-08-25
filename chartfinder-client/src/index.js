import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import App from "./containers/App";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
