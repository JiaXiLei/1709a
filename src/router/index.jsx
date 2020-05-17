import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


import Login from '@/pages/login'  //登陆
import Registered from '@/pages/registered'  //注册
import Home from '@/pages/home'  //首页

export default class Routes extends React.PureComponent {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/registered' component={Registered} />
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}