const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    // api 表示代理路径
    // target 表示目标服务器的地址
    app.use(

        proxy('/api', {

            //http://loaclhost:8000/ 地址只是实例， 实际地址以项目为准
            target: 'https://api.baxiaobu.com',

            //跨域时一般都设置该值 为 true
            changeOrigin: true,

            // 重写接口路径
            pathRewrite: {
                '^/api': ''  //这样处理后， 最终得到的接口路径为： http://loaclhost:8000/api
            }
        })
    )
}