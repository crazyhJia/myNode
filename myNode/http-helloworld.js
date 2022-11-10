var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile('C:/Users/hj/Desktop/projectNode/index.html', function (err, data){
            if (err) {
                return res.end('404 not found...')
            }
            res.end(data)
        })
    } else if (url === '/file.txt') {
        fs.readFile('C:/Users/hj/Desktop/projectNode/file.txt', function (err, data){
            if (err) {
                res.setHeader('Content-type','text/plain; charset=utf-8')
                return res.end('404 not found...')
            }
            res.end(data)
        })
    } else if (url === '/simpleModule/index.html') {
        fs.readFile('C:/Users/hj/Desktop/projectNode/simpleModule/index.html', function (err, data){
            if (err) {
                return res.end('404 not found...')
            }
            res.end(data)
        })
    }
})

server.listen(3000, function () {
    console.log('start...')
})
