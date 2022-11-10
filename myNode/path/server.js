let http = require('http')
// let fs = require('fs')


//记一次node，fs.readFileSync('')读取文件失败，报错error: ENOENT: no such file or directory
//原因，因为nodejs官方推荐在使用fs模块读取文件时使用绝对路径，而不是相对路径。
// try{
//     let ff = fs.readFileSync('./path/static/login.html', 'utf8');
//     console.log('文件内容: ' + ff);
// }catch(err){
//     console.error('读取文件出错: ' + err.message);
// }

// let route = require('./route')



// http.createServer((req,res) => {
//     let myurl = new URL(req.url, 'http://127.0.0.1')
//     console.log(myurl)
//
//     // switch(myurl.pathname) {
//     //     case '/login':
//     //         res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
//     //         res.write(fs.readFileSync('./path/static/login.html'),'utf-8')  //同步
//     //         break;
//     //     case '/home':
//     //         res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
//     //         res.write(fs.readFileSync("./path/static/home.html"),'utf-8')
//     //         break;
//     //     default:
//     //         res.writeHead(404, {'Content-Type':'text/html;charset=utf8'})
//     //         res.write(fs.readFileSync('./path/static/404.html'),'utf-8')
//     //         res.end('404')
//     //         break;
//     //     }
//
//     // route(myurl.pathname, res)
//
//     try {
//         route[myurl.pathname](res);
//     } catch(error) {
//         route['/404'](res)
//         console.log(error)
//     }
//     res.end();
// }).listen(3000, () => {
//     console.log('server start')
// })


let Router = {}

// let api = require('./api')

//Object.assign 可以将多个对象合并到一个对象里面
// Object.assign(Router, route)
// Object.assign(Router, api)

//express use
function use(obj) {
    Object.assign(Router, obj)
}

console.log('sssssssssss')
console.log(Router)

//优化
function start() {
    http.createServer((req,res) => {
        let myurl = new URL(req.url, 'http://127.0.0.1')
        // console.log(myurl)

        // switch(myurl.pathname) {
        //     case '/login':
        //         res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        //         res.write(fs.readFileSync('./path/static/login.html'),'utf-8')  //同步
        //         break;
        //     case '/home':
        //         res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        //         res.write(fs.readFileSync("./path/static/home.html"),'utf-8')
        //         break;
        //     default:
        //         res.writeHead(404, {'Content-Type':'text/html;charset=utf8'})
        //         res.write(fs.readFileSync('./path/static/404.html'),'utf-8')
        //         res.end('404')
        //         break;
        //     }

        // route(myurl.pathname, res)
            console.log(myurl.pathname + "-----------")
        try {
            // route[myurl.pathname](req,res);

            Router[myurl.pathname](req,res);
        } catch(error) {
            // route['/404'](req,res)

            Router['/404'](req,res)
            console.log(error)
        }
        res.end();
    }).listen(3000, () => {
        console.log('server start')
    })
}

console.log('aaaaaaaaaaa')
console.log(Router)


exports.start = start;
exports.use = use;
