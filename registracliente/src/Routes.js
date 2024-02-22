import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './home';
import Products from './produtos';
import Clients from './App';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={Products} />
                <Route path="/clients" component={Clients} />
            </Switch>
        </Router>
    );
};

export default Routes;