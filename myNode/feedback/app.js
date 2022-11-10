// app application 应用程序
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在public目录上
var http = require('http')
var fs = require('fs')
var artTem = require('art-template')
var url = require('url')

var comments = [
    {
        name: '李白',
        msg: '很好！',
        time: '2021-5-31'
    },
    {
        name: '王维',
        msg: '不错！',
        time: '2021-5-31'
    },
    {
        name: '杜甫',
        msg: '加油！',
        time: '2021-5-31'
    }
];

http
    .createServer(function(req, res){
        var urlObj = url.parse(req.url, true)
        var pathName = urlObj.pathname;

        if(pathName === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if(err) {
                    return res.end('not found file...')
                }
                var htmlStr = artTem.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr);
            })
        } else if (pathName.indexOf('/post') === 0) {
            fs.readFile('./views/post.html', function (err, data) {
                if(err) {
                    return res.end('404...')
                }
                res.end(data)
            })
        }  else if (pathName.indexOf('/pinglun') === 0) {
            // res.end(JSON.stringify(urlObj.query))
            var comment = urlObj.query;
            comment.time = '2021-06-03';
             comments.unshift(comment);

            //通过服务器让客户端重定向
            //  1.状态码设置为302临时重定向   statusCode
            //  2.在响应头中通过location告诉客户端往哪重定向
            //如果客户端发现收到服务器的响应的状态码为302时就会自动去找location，
            //所以你就能看到客户自动跳转了
            res.statusCode = 302;
            res.setHeader('Location','/');
            res.end()
        } else if (pathName.indexOf('/public/') === 0) {
        //css、js、img
        //    统一处理：如果请求路径是以 /public/ 开头的，则被认为要获取 public 中的某个资源
        //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
            fs.readFile('.' + pathName, function (err, data) {
                if(err) {
                    return res.end('404...')
                }
                res.end(data)
            })
        } else {
            fs.readFile('./views/404.html', function (err, data) {
                if(err) {
                    return res.end('404...')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function () {
        console.log('running')
    })
