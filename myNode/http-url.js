let http = require('http');
let url = require('url');
let server = http.createServer();
server.on('request',function (req, res) {
    if (req.url === '/favicon.ico') {
        //读取的本地图标
        return
    }
    console.log(url.parse(req.url).pathname,'sss')


    res.writeHeader('200', {'Content-type': 'text/html; charset=utf-8'});
    res.end(`<p>login page <a href="">点我</a></p>`)
});

server.listen(3000, function () {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/来进行访问。')
});

let u = 'http://127.0.0.1:3000/login?name=aa'
let str = url.parse(u)
console.log(url.parse(u))
console.log(url.format(str))
