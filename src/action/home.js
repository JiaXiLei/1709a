


export function gitHomeNmae(option){
    // console.log(option,'option')
    return{
        type: 'GET_HOME_NAME',
        payload: option
    }
}
export function getTableData(option){
    return{
        type: 'GET_TABLE_DATA',
        payload: option
    }
}
export function getlistWithData(option){
    return{
        type: 'GET_LIST_WITH_DATA',
        payload: option
    }
}
