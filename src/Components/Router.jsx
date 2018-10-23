import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from 'react';


import Application from './Application';
import NotFound from './NotFound';





class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {Application} />
                    <Route exact path = "/go-to-pay" component = {NotFound} />
                    <Route component = {NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router;