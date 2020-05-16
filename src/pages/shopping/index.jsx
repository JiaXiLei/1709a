import React from 'react';

import './style.less'  //引用样式
import Shopping from './shopping'
import Have from './have'
import TabBar from './TabBar'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


export default class Index extends React.PureComponent {

    render() {
        
        return (
            <div className='pages-shopping'>
                <BrowserRouter>
                <div className="shopping-leftNav">
                    <TabBar />
                </div>
                <div className='shopping-right'>
                    <Switch>
                        <Route path='/have' component={Have} />
                        <Route path='/shopping' component={Shopping} />
                        <Redirect to='/shopping' component={Have} />
                    </Switch>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
