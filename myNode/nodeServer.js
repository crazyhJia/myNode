let express = require('express'); //必须的
let app = express();

//Express 中接收 POST请求参数 需要借助第三方包 body-parser
const bodyParser = require('body-parser');

//让app 对象使用工程中的静态资源 public文件夹
app.use(express.static('public'))

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

app.all('*',function(req,res,next){
    let origin=req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Content-Type', 'application/json')
    next();  //将请求的控制权交给下一个中间件
})

app.post('/postdata',function(req,res){
    console.log(req.body)
    console.log(req.body.age + "     post");
    let data = {
        name: 'lily',
        age: '20'
    }
    // res.send(data)
    res.send(req.body)
})

app.get('/getdata',function(req,res){
    console.log(req.query.name + "     get");
    res.send('服务器传给前端的get信息')
})

app.listen(3002,function () {
console.log('服务器启动--------serve')
});
console.log('port is on 3002.')
