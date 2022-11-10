let fs = require('fs')

fs.stat('C:/Users/hj/Desktop/hello/7',(err, data) => {
    if(!err) {
        console.log(data)
        console.log(data.isFile())
        console.log(data.isDirectory())
    }
})

// fs.readdir('C:/Users/hj/Desktop/hello/7',(err, data) => {
//     if(!err) {
//         console.log(data)
//     }
//     data.forEach(item => {
//         fs.unlink(`C:/Users/hj/Desktop/hello/7/${item}`, (err) => {
//             console.log(err)
//         })
//         fs.rmdir('C:/Users/hj/Desktop/hello/7', (err) => {})
//         //这个方法不好
//     })
// })

// mkdirSync 阻塞后面代码执行
// try {
// //     fs.mkdirSync('C:/Users/hj/Desktop/hello/20221020')
// // }catch (error) {
// //     console.log("1111111111", error)
// // }

// unlinkSync 同步  这种方式也不推荐  同步代码在执行的时候，服务器将停止响应
// fs.readdir('C:/Users/hj/Desktop/hello/20221020',(err, data) => {
//     if(!err) {
//         console.log(data)
//     }
//     data.forEach(item => {
//         fs.unlinkSync(`C:/Users/hj/Desktop/hello/20221020/${item}`, (err) => {
//             console.log(err)
//         })
//         fs.rmdir('C:/Users/hj/Desktop/hello/20221020', (err) => {})
//     })
// })



let fsp = require('fs').promises
// 基于promise的写法  异步方式
fsp.readFile('C:/Users/hj/Desktop/hello/fs/1.txt', 'utf-8')
    .then(data => {
        console.log(data)
    })

//好用的写法
fsp.readdir('C:/Users/hj/Desktop/hello/8', 'utf-8')
    .then(async (data) => {
        // let arr = []
        //         // data.forEach( item => {
        //         //     arr.push(fsp.unlink(`C:/Users/hj/Desktop/hello/8/${item}`))
        //         // })
        //         // await Promise.all(arr)

        //优雅的写法
        await Promise.all(data.map(item => fsp.unlink(`C:/Users/hj/Desktop/hello/8/${item}`)))
        await fsp.rmdir('C:/Users/hj/Desktop/hello/8')
    })
