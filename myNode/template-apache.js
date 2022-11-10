var http = require('http')
var fs = require('fs')
var template = require('art-template')

//使用模板引擎解析替换html页面

var server = http.createServer()

var dDir = 'C:/Users/hj/Desktop/hello';

server.on('request', function (req, res) {
    fs.readFile('./tpl-apache.html', function (err, data){
        if (err) {
            return res.end('404 not found...')
        }
        var content = '';
        fs.readdir(dDir,function (err, files) {
            if (err) {
                console.log('err')
                return res.end('cannot found dir')
            }
            var htmlStr = template.render(data.toString(), {
                files: files,
                Title: '哈哈'
            })

            // data = data.toString();
            // data = data.replace('item', content)
            res.end(htmlStr)
        })
    })
})

server.listen(3000, function () {
    console.log('start...')
})
