import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header1 from '../components/Header1';
import links1 from './links1';
export default function Router1(){
    return(
        <Router>
            <Header1 />
            <Switch>
                {links1.map((link) => (
                    <Route
                        path={link.path}
                        exact={link.exact}
                        component={link.component}
                    />
                ))}
            </Switch>
        </Router>
    );
}