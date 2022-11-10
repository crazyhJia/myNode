const express = require('express');

const admin = express.Router();

admin.get('/index', (req, res) => {
    res.send('欢迎来到admin首页页面');
});

// 导出 home 这个路由对象
module.exports = admin;
