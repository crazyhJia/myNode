const express = require('express');

const home = express.Router();

home.get('/index', (req, res) => {
    res.send('欢迎来到home首页页面');
});

// 导出 home 这个路由对象
module.exports = home;
