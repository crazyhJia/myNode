let fs = require('fs')
let path = require('path')
let mime = require('mime')

mime.getType('css')

// function route(myurl, res) {
//     switch(myurl) {
//         case '/login':
//             res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
//             res.write(fs.readFileSync('./path/static/login.html'),'utf-8')  //同步
//             break;
//         case '/home':
//             res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
//             res.write(fs.readFileSync("./path/static/home.html"),'utf-8')
//             break;
//         default:
//             res.writeHead(404, {'Content-Type':'text/html;charset=utf8'})
//             res.write(fs.readFileSync('./path/static/404.html'),'utf-8')
//             break;
//     }
// }

//优化版
const route = {
    '/login': (req,res) => {
        render(res, './path/static/login.html')
        // res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        // res.write(fs.readFileSync('./path/static/login.html'),'utf-8')  //同步
    },
    '/home': (req,res) => {
        render(res, './path/static/home.html')
    },
    '/': (req,res) => {
        render(res, './path/static/home.html')
        // res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        // res.write(fs.readFileSync("./path/static/home.html"),'utf-8')
    },
    '/404': (req,res) => {
        if(readStaticFile(req,res)) {
            return
        }
        res.writeHead(404, {'Content-Type':'text/html;charset=utf8'})
        res.write(fs.readFileSync('./path/static/404.html'),'utf-8')
    },
    // '/favicon.ico': (req,res) => {
    //     //读取的本地图标
    //     res.writeHead(200, {'Content-Type':'image/x-icon;charset=utf8'})
    //     res.write(fs.readFileSync('./path/static/favicon.ico'))
    // }
}

function render(res, path) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.write(fs.readFileSync(path),'utf-8')
}

//静态文件管理
function readStaticFile(req, res) {
    //获取路径值
    let myurl = new URL(req.url, 'http://127.0.0.1')
    console.log(path.join(__dirname,'/static',myurl.pathname))
    let pathname = path.join(__dirname,'/static',myurl.pathname)

    if(pathname==='/')return false

    if(fs.existsSync(pathname)) {
        // render(res,pathname,mime.getType('css'))
        render(res,pathname,mime.getType(myurl.pathname.split(".")[1]))
        return true;
    } else {
        return false;
    }


}


module.exports = route
