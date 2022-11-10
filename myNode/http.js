let http = require('http');
//使用http.createServer()方法创建一个web服务器，返回一个server实例
var server = http.createServer();

//服务器干什么
//提供服务，提供对数据的服务
//发请求
//接受请求
//处理请求
//给个反馈，发送响应
//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理
 server.on('request',function () {
    console.log("收到客户端请求！")
 })

//ip地址用来定位计算机
//端口号用来定位具体的应用程序
//所有需要联网通信的应用程序都会占用一个端口号

//绑定端口号，启动服务器
server.listen(3001,function () {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3001/来进行访问。')
})
