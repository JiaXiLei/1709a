import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Home from '@/pages/home'
import Login from '@/pages/login'

export default class Routes extends React.PureComponent {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Redirect to='/home' />
                </Switch>
            </BrowserRouter>
        )
    }
}