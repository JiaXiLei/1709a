//login的reducedr
const loginState = {
    name: 'login',
}
export default function login(state = loginState, action) {
    
    console.log(action,'loginaction')

    switch (action.type) {

        default:
            return state
    }
}