let express = require('express')
let app = express();
let IndexRouter = require('./indexRouter')

//应用级别
// app.use((req,res,next) => {
//     console.log('验证token')
//     next()
// })

//应用级别
app.use('/', IndexRouter)

//错误中间件
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(404).send('找不到页面')
})
app.listen(3001, ()=> {
    console.log('路由级中间件')
})
