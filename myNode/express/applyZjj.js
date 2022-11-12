let express = require('express')
let app = express();

//应用级中间件
app.get("/", (req,res) => {
    res.send({
        age: '18',
        name: 'lily'
    })
})

app.get("/login", (req,res) => {
    res.send(`
    <html><h1>login 登录</h1></html>`)
})

let fun1 = (req,res,next) => {
    let flag = false;
    if(flag) {
        next()
    } else {
        res.send('error')
    }
}
let fun2 = (req,res) => {
    res.send({list: [1,2,3]})
}

//use()的使用顺序很重要
// app.use(fun1);

//表示只响应/home的路径中间件
app.use('/home',fun1)

app.get('/home',(req,res) => {
    res.send('home')
})
app.get('/list',(req,res) => {
    res.send('list')
})



app.listen(3001, ()=> {
    console.log('应用级中间件')
})
