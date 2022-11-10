let server = require('./server')
let route = require('./route')
let api = require('./api')


//注册路由
server.use(route);
server.use(api);

server.start();

console.log('test')
