let http = require('http');
let url= require('url');

//jsonp   解决跨域问题

let serve = http.createServer();
serve.on('request', function (req, res) {
    let urlObj = url.parse(req.url, true);

    res.writeHead(200, {
        'Content-type': 'application/json;charset=utf-8',
        //cors 头
        'access-control-allow-origin': '*'
    })

    switch(urlObj.pathname) {
        case '/api/aa':
            res.end(`${JSON.stringify({
                name: 'lily',
                age: 18
            })}`)
            break;
        default:
            res.end('404')
    }
})

serve.listen('3000', function () {
    console.log('服务起来了，http://127.0.0.1:3000')
})
