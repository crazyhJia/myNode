let express = require('express')
let router = express.Router()
// express.Router()   路由及别匹配的方法

//路由级别
router.get('/home', (req,res) => {
    res.send('home')
})
router.get('/list', (req,res) => {
    res.send('list')
})

module.exports = router;
