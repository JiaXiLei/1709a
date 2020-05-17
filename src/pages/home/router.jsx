import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";
import AppEcharts from './echarts'
import Tbales from './table'
import Add from './table/add'
import Paginations from './pagination'


export default class Routers extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/home-Echarts' component={AppEcharts} />
                <Route path='/home-Table' component={Tbales} />
                <Route path='/home-Add' component={Add} />
                <Route path='/home-Paginations' component={Paginations} />
                <Redirect to='/home-Table' component={Tbales} />
            </Switch>
        )
    }
}