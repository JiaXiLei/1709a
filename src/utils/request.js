import axios from 'axios'
import qs from 'qs'


let cancelToken = axios.CancelToken
const cancel = []
const removePending = config => {
    for (let p in cancel) {
        if (cancel[p].u === config.url) {
            cancel[p].f()
        }
    }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
    //得到token，添加到。。
    // const { token } = store.getState().form
    // if (token) {
    //   config.data += `&token=${token}`
    // }
    //在一个ajax发送前执行一下取消操作
    removePending(config)
    config.cancelToken = new cancelToken(c => {
        cancel.push({
            f: c,
            u: config.url,
        })
    })
    return config
}, error => {
    return Promise.reject(error)
})
//添加响应拦截器
// axios.interceptors.response.use(response => {
// console.log(response)
// 根据状态码跳转
// if (response.status === 200) {
// window.location.href = 'https://www.baidu.com'
// }
// return response
// }, error => {
// switch (error.response && error.response.status) {
//     case 404:
//         message.warning('请求失败:404')
//         setInterval(()=>{
//             window.location.href='http://www.baidi.com'
//         }, 1000)
//         break;
//     default:
//         break;
// }
// console.log(error.response)
// return Promise.reject(error)
// })

export function getAxios(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            params,
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function postAxios(url, data = {}) {

    // let result = ''
    // if (localStorage.getItem('token')) {
    //     result = { ...data, token: localStorage.getItem('token') }
    // } else {
    //     result = data
    // }
    // console.log(url, data)
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: qs.stringify(data)
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}