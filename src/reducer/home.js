//home的reducer
const homeState = {
    name: 'home',
}


export default function home(state = homeState, action) {
    console.log(action,'homeaction')
    switch (action.type) {

        case 'GET_HOME_NAME':
            return { ...state,  name: action.payload  }

        default:
            return state
    }
}
