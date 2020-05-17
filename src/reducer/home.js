const homeState = {
    user: localStorage.getItem('user'),
    tableData: [],
    listwithData: []
}


export default function home(state = homeState, action) {
    // console.log(action, 'homeaction')
    switch (action.type) {

        case 'GET_USER':
            return { ...state, user: action.payload.user_name }

        case 'GET_TABLE_DATA':
            return { ...state, tableData: action.payload }

        case 'GET_TABLE_DATA':
            return { ...state, listwithData: action.payload }


        default:
            return state
    }
}
