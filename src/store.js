import { createStore, applyMiddleware, compose } from 'redux'
//redux-promise和redux-thunk 原来分解axios请求的data数据
import promise from 'redux-promise'
import thunk from 'redux-thunk'



const shoppingData = {
    data: [],
    price: 0,
    number: 0,
}

function reducer(state = shoppingData, action) {
    switch (action.type) {
        case 'ADD_DATA':
            if (!state.data.length) {
                action.payload.number = 1
                state.data.push(action.payload)
                state.number++
                state.price += action.payload.price
            } else {
                if (state.data.includes(action.payload)) {
                    state.data.map(res => {
                        if (res.id === action.payload.id) {
                            res.number++
                            state.number++
                            state.price += action.payload.price
                        }
                    })
                } else {
                    action.payload.number = 1
                    state.data.push(action.payload)
                    state.number++
                    state.price += action.payload.price
                }
            }
            return { ...state, data: state.data }

        case 'ALL_DELETE_DATA':
            state = {
                data: [],
                price: 0,
                number: 0,
            }
            return { ...state }

        case 'DELETE_DATA':
            const i = state.data.indexOf(action.payload)
            state.data.splice(i,1)
            state.number -= action.payload.number
            state.price -= action.payload.price*action.payload.number

            return { ...state }
        default:
            return state
    }


}
//固定格式 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(promise, thunk))
)


export { store }  //导出store 在主index.js页面引用