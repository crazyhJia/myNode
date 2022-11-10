let fs = require('fs');

//可读流   适合读取大文件
// let rs = fs.createReadStream('C:/Users/hj/Desktop/hello/fs/2.txt', 'utf-8')
// rs.on('data', chunk => {  // data事件可能多次，每次传递的chunk是流的一部分数据。
//     console.log(chunk)
// })
// rs.on('end',() => {
//     console.log('end')
// })
// rs.on('err', err => {
//     console.log(err)
// })


//可写流
// let ws = fs.createWriteStream('C:/Users/hj/Desktop/hello/fs/1.txt', 'utf-8')
// ws.write('111111111')
// ws.write('22222222')
// ws.write('33333333')
// ws.end()



//管道   大文件复制    高性能的复制文件的方法
//pipe：readable流和writab流串联后，所有的数据自动从readable流进入到writable流
let readStream = fs.createReadStream('C:/Users/hj/Desktop/hello/fs/2.txt', 'utf-8')
let writeStream = fs.createWriteStream('C:/Users/hj/Desktop/hello/fs/1.txt', 'utf-8')
readStream.pipe(writeStream)    // A.PIPE(B)  -->  A,B: A   实现了源文件把内容复制到目标文件了
