const EventEmitter = require('events');

//订阅发布模式   解决异步问题
const event = new EventEmitter();

event.on('play', (data) => {
    console.log('事件触发了----play',data)
})

event.on('run', (data) => {
    console.log('事件触发了-----run',data)
})


 setTimeout(() => {
     event.emit('play','sssss')
 },2000)

//////////////////////////////////////////

let http = require('http');
let https = require('https');
let url= require('url');
// let EventEmitter = require('events');

let events = null;

let serve = http.createServer();
serve.on('request', function (req, res) {
    let urlObj = url.parse(req.url, true);
    res.writeHead(200, {
        "Content-type": "application/json;charset-utf-8",
        "access-control-allow-origin": '*'
    })

    switch(urlObj.pathname) {
        case '/api/aa':
            // httpGet(res);  //耦合度过高
            events = new EventEmitter();
            events.on('action', (data) => {
                console.log('ddddddddddddd')
                res.end(data)
            });
            httpGet();
            // httpGet((data) => {   //回调函数，数据收集完了之后调用
            //     res.end(data);
            // }); //解耦
            break;
        default:
            res.end('404')
    }
})

serve.listen('3001', function () {
    console.log('服务起来了，http://127.0.0.1:3001')
})

function httpGet(cb) {
    let data = '';
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?
    ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4`, res => {
        res.on('data', chunk => {
            data += chunk;  //需要拼接数据chunk
        })
        res.on('end', () => {
            // console.log(data)
            // response.end(data)   //耦合度高
            // cb(data)
            console.log('2222')
            events.emit('action', data)
        })
    })

}
