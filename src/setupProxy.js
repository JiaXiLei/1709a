const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    // api 表示代理路径
    // target 表示目标服务器的地址
    app.use(
        proxy('/api', {
            //http://loaclhost:8000/ 地址只是实例， 实际地址以项目为准
            target: 'http://api.baxiaobu.com/index.php',
            
            //跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路径
            pathRewrite: {
                '^/api': ''  //这样处理后， 最终得到的接口路径为： http://loaclhost:8000/api
            }
        })
    )
    // 上传图片接口
    app.use(
        proxy('/urlapi', {
            //http://loaclhost:8000/ 地址只是实例， 实际地址以项目为准
            target: 'http://49.235.147.95:3001',
            //跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路径
            pathRewrite: {
                '^/urlapi': ''  //这样处理后， 最终得到的接口路径为： http://loaclhost:8000/api
            }
        })
    )
    
    // app.use(
    //     proxy('/aps', {
    //         //http://loaclhost:8000/ 地址只是实例， 实际地址以项目为准
    //         target: 'https://api.baxiaobu.com/index.php',
    //         //跨域时一般都设置该值 为 true
    //         changeOrigin: true,
    //         // 重写接口路径
    //         pathRewrite: {
    //             '^/aps': ''  //这样处理后， 最终得到的接口路径为： http://loaclhost:8000/api
    //         }
    //     })
    // )
    // 分页
    app.use(
        proxy('/listApi', {
            //http://loaclhost:8000/ 地址只是实例， 实际地址以项目为准
            target: 'https://blogs.zdldove.top',
            //跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路径
            pathRewrite: {
                '^/listApi': ''  //这样处理后， 最终得到的接口路径为： http://loaclhost:8000/api
            }
        })
    )
}