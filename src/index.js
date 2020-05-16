import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';


import Classfy from '@/pages/classfy'
import Shopping from '@/pages/shopping'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.render(
  // <Classfy />,
  <Provider store={store} >
    <Shopping />
  </Provider>,
  document.getElementById('root')
);
