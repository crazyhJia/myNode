// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

const home = require('./home');
const admin = require('./admin');

//让app 对象使用工程中的静态资源 public文件夹
app.use(express.static('public'))

app.all('*', function (req, res, next) {
    let origin=req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Content-Type', 'application/json')
    next();  //将请求的控制权交给下一个中间件
})


app.use('/home', home);
app.use('/admin', admin);

// 监听端口
app.listen(3000);
console.log('服务器开启成功');
//使用http://localhost:3000/home/index   访问
//使用http://localhost:3000/admin/index   访问

