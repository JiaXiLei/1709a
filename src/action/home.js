


export function gitHomeNmae(option){
    console.log(option,'option')
    return{
        type: 'GET_HOME_NAME',
        payload: option
    }
}