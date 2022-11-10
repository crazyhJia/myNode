var http = require('http')
var fs = require('fs')

var server = http.createServer()

var dDir = 'C:/Users/hj/Desktop/hello';

server.on('request', function (req, res) {
    fs.readFile('flie.html', function (err, data){
        if (err) {
            return res.end('404 not found...')
        }
        var content = '';
        fs.readdir(dDir,function (err, files) {
            if (err) {
                console.log('err')
                return res.end('cannot found dir')
            }
            console.log(files)
            files.forEach( function (item) {
                content += `
                <div>           
                    <tr>
                        <td>${item}</td>
                    </tr>
                </div>
                `
            })
            data = data.toString();
            data = data.replace('item', content)
            res.end(data)
        })
    })
})

server.listen(3000, function () {
    console.log('start...')
})
