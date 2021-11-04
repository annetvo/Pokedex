import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Shop from "./Shop";
import SignIn from "./Signin";
import history from "./history";
import DetailView from "./DetailView";

export default class Routes extends Component {
    render () {
        return ( 
            <Router history={history}>
                <Switch>
                    <Route path="/Shop" exact component={Shop} />
                    <Route path="/" exact component={DetailView} />
                    <Route path ="Signin" exact component={SignIn} />
                        
                </Switch>
            </Router>
        )
    }
}