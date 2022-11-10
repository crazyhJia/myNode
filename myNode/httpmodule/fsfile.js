let fs = require('fs');

//fs创建文件夹
// fs.mkdir('C:/Users/hj/Desktop/hello/fs',(err) => {
//     console.log(err)
//     if(err && err.code=='EEXIST') {
//         console.log("目录已存在")
//     }
// })

//创建文件
fs.writeFile('C:/Users/hj/Desktop/hello/fs/a.txt', 'hello world', (err) => {
    console.log(err)
})

//追加内容
fs.appendFile('C:/Users/hj/Desktop/hello/fs/a.txt', '\nhello world 你好', (err) => {
    console.log(err)
})

//读取文件    err-first
fs.readFile('C:/Users/hj/Desktop/hello/fs/a.txt', (err, data) => {
    if(!err) {
        console.log(data.toString('utf-8'))
    }
})

//读取文件    err-first
fs.readFile('C:/Users/hj/Desktop/hello/fs/a.txt', 'utf-8', (err, data) => {
    if(!err) {
        console.log('222')
        console.log(data)
    }
})

//删除文件
fs.unlink('C:/Users/hj/Desktop/hello/fs/a.txt', (err) => {
        console.log('222')
        console.log(err)
})
