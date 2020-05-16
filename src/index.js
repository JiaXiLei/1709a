import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import { Provider } from 'react-redux'
import { store } from './store'

import Routes from '@/router'

ReactDOM.render(
    <Provider store={store} >
        <Routes />
    </Provider>,
    document.getElementById('root')
);
