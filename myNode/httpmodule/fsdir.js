let fs = require('fs');

//fs创建文件夹
// fs.mkdir('C:/Users/hj/Desktop/hello/fs',(err) => {
//     console.log(err)
//     if(err && err.code=='EEXIST') {
//         console.log("目录已存在")
//     }
// })

//fs 重命名文件夹
fs.rename('C:/Users/hj/Desktop/hello/fs',
    'C:/Users/hj/Desktop/hello/http-fs', (err) => {
        console.log(err)
        if(err && err.code=='ENOENT') {
            console.log("重命名的目录不存在")
        }
})

//fs 删除文件夹   如果文件夹下有东西，这个方法就删不掉
//                 此时就需要先用 unlink 删文件后再用 rmdir
fs.rmdir('C:/Users/hj/Desktop/hello/http-fs', (err) => {
    console.log(err)
    if (err && err.code == 'ENOENT') {
        console.log("删除的目录不存在")
    }
})
