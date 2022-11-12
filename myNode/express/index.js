let express = require("express");
let app = express();


// 路由
app.get("/", (req,res) => {
    // res.write("hello hj")
    // res.end();

    res.send({
        age: '18',
        name: 'lily'
    })
})



app.get("/login", (req,res) => {
    //send() 可以解析代码
    res.send(`
    <html><h1>login 登录</h1></html>`)
})

//字符串模式匹配路径   /acd   /abcd
app.get("/ab?cd", (req,res) => {
    res.send('ok')
})

//  : 占位符  匹配 /ab/***
app.get("/ab/:id", (req,res) => {
    res.send('xiangying')
})

//匹配 abcd、abbcd、abbbbcd  b后可接任意多个b字符
app.get("/ab+cd", (req,res) => {
    res.send('ab+cd')
})
//匹配 abcd、abbcd、abbbbcd  b后可接任意字符
app.get("/ab*cd", (req,res) => {
    res.send('ab*cd')
})
//匹配 abe、abcde
app.get("/ab(cd)?e", (req,res) => {
    res.send('ab(cd)?e')
})


//正则表达式

//匹配任何路径中含有a的路径
app.get(/a/, (req,res) => {
    res.send('/a/')
})

//匹配含有***fly， 不匹配butterflyman等
app.get(/.*fly$/, (req,res) => {
    res.send('/.*fly$/')
})




// 中间件  可以放多个中间件  next: 是否执行下一个中间件
app.get('/home',(req,res,next) => {
    //验证用户token过期，cookie过期
    console.log('验证token')
    let flag = true;
    if(flag) {
        next()
    } else {
        res.send('error')
    }
},(req,res) =>{
    //查询数据库
    //返回内容
    res.send({list: [1,2,3]})
})

//优雅写法
let fun1 = (req,res,next) => {
    let flag = true;
    if(flag) {
        next()
    } else {
        res.send('error')
    }
}
let fun2 = (req,res) => {
    res.send({list: [1,2,3]})
}
//数组函数混合写法
app.get('/home2',[fun1,fun2])

app.get('/home3',[fun1,(req,res) => {
    res.send('home3')
}])

app.listen(3000, () => {
    console.log("app start")
})
