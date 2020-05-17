
export function getUser(option){
    return{
        type: 'GET_USER',
        payload: option,
    }
}