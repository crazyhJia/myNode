let fs = require('fs')
let zlib = require('zlib')
//打包压缩文件   减少流量消耗，减少响应时间   zlib实现客户端和服务端网络传输的优化方案

let gzip = zlib.createGzip();

// let readStream = fs.createReadStream('C:/Users/hj/Desktop/hello/fs/2.txt');
// let writeStream = fs.createWriteStream('C:/Users/hj/Desktop/hello/fs/1.txt');
//
// readStream.pipe(gzip).pipe(writeStream)


let http = require('http');
http.createServer((req,res) => {
    //res 本身就是一个可写流
    let readStream2 = fs.createReadStream('C:/Users/hj/Desktop/hello/fs/index.js');
    res.writeHead(200, {'Content-Type':'application/x-javascript;charset=utf-8','Content-Encoding':'gzip'})
    readStream2.pipe(gzip).pipe(res)  //进行压缩
}).listen(3000, () => {
    console.log('server is start')
})
