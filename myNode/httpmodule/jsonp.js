let http = require('http');
let url= require('url');

//jsonp   解决跨域问题

let serve = http.createServer();
serve.on('request', function (req, res) {
    let urlObj = url.parse(req.url, true);
    console.log(url.parse(req.url))
    console.log(urlObj.query.callback)
    console.log(urlObj.query)
    switch(urlObj.pathname) {
        case '/api/aa':
            res.end(`${urlObj.query.callback}(${JSON.stringify({
                name: 'lily',
                age: 18
            })})`)
            break;
        default:
            res.end('404')
    }
})

serve.listen('3000', function () {
    console.log('服务起来了，http://127.0.0.1:3000')
})
