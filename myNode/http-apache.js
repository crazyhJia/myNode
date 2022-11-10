var http = require('http')
var fs = require('fs')
console.log(fs)
var server = http.createServer()

var dDir = 'C:/Users/hj/Desktop/hello';

server.on('request', function (req, res) {
    var url = req.url;
    var filePath = 'index.html'
    if (url !== '/') {
        filePath = url;
    }
    fs.readFile(dDir + filePath, function (err, data){
        if (err) {
            return res.end('404 not found...')
        }
        res.end(data)
    })
    console.log(filePath,dDir+filePath)
})

server.listen(3000, function () {
    console.log('start...')
})
