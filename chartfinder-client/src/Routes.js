import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup";
import App from "./containers/App"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/signup" component={Signup} />
                    
                </Switch>
            </Router>
        )
    }
}