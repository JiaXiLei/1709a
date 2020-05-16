import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { login, home } from '@/reducer/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// 创建 store createStore(reduce)
// combineReducers 用于合并reducer
const store = createStore(
    combineReducers({
        home: home,
        login: login,
    }),
    composeEnhancers(applyMiddleware(promise, thunk))
)


//抛出store
export {
    store
}


