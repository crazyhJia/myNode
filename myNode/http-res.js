let http = require('http');
//使用http.createServer()方法创建一个web服务器，返回一个server实例
var server = http.createServer();

//request 请求事件处理函数，需要接受两个参数
//  Request 请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  Response 响应对象
//      响应对象可以用来给客户端发送响应消息
 server.on('request',function (request, response) {
    console.log("收到客户端请求！请求路径是：" + request.url)
     // response对象有一个方法，write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
    //  response.write("hello")
    //  response.write(" nodejs")
    //  response.end();  //可以把消息返给客户端了

     //  上面write的方式比较麻烦，所以推荐更简单的方式直接end的同时发送数据
     // response.end('hello world!')

     //当请求不同的路径的时候，响应不同的结果
     //1.获取请求路径
     // request.url 获取的是端口号之后的那一部分路径，也就是说所有的url都是以/开头的
     //2.判断路径处理响应

    var url = request.url
    if(url == '/'){
        //在服务端默认发送的数据，其实就是utf-8编码的内容
        //但是浏览器不知道你是utf-8编码的内容
        //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
        //中文操作系统默认是 bgk
        //解决方法：正确告诉浏览器发送的内容是什么编码
        //在http 协议中，响应内容类型 Content-type
        //text/plain  就是普通文本
        response.setHeader('Content-type','text/plain; charset=utf-8')
        response.end('index page  首页');
    }else if(url == '/login'){
        //如果你发送的是html格式的字符串，则也要告诉浏览器我给你发送的是text/html格式的内容
        response.setHeader('Content-type','text/html; charset=utf-8')
        response.end('<p>login page <a href="">点我</a></p>')
    }else{
        response.end('404 not found!')
    }
 })
//绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/来进行访问。')

})
