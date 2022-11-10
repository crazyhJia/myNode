// art-template
// art-template 不仅可以在浏览器中使用，也可以在node中使用

//模板引擎不关心内容，只关心 {{ }}  这个符号

//在node中使用模板引擎
//模板引擎最早诞生于服务器领域，后来发展到前端

    //服务端渲染：就是在服务端使用模板引擎
    //服务端渲染和客户端渲染的区别
        //客户端渲染时，是ajax异步渲染的，不利于SEO搜索引擎优化，异步体验好，速度快，局部刷新
        //服务端渲染只请求了一次，响应最终结果，客户端不再做任何处理
        //服务端渲染是可以被爬虫抓取到的，客户端渲染很难被爬虫抓取到
        //所以真正的网站既不是纯异步也不是纯服务端渲染出来的，而是两者结合，
        //例如京东的商品列表就是服务端渲染，目的是为了seo搜索引擎优化
        //而它的商品评论列表为了用户体验，而且也不需要seo优化，所以采用的客户端渲染


//1.安装  npm i art-template 模板引擎
//2.在需要使用的文件模块中加载 art-template
//  只需要使用 require 方法加载就可以了：require('art-template')
//  参数中的 art-template 就是你下载的包的名字，也就是说你install的名字是什么，require中的就是什么
//3.查文档，使用模板引擎的 API

var template = require('art-template')
var fs = require('fs')
// var tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body>
//     <h1>我叫：{{ name }}</h1>
//     <p>今年 {{ age }}</p>
//     <p>来自 {{ province }}</p>
//     <p>喜欢 {{each hobbies}} {{ $value }} {{/each}}</p>
// </body>
// </html>
// `

var ret = template.render('hello {{ name }}',{
    name: 'rose'
})

console.log(ret)

// var ret2 = template.render(tplStr,{
//     name: 'rose',
//     age: 18,
//     province: '北京市',
//     hobbies: ["sing", 'dance', 'piano']
// })
// console.log(ret2)


fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败。。。')
    }
    //默认读取到的数据是而二进制数据
    //模板引擎的 render 方法需要接受的是字符串
    var ret3 = template.render(data.toString(),{
        title: '模板引擎',
        name: 'rose',
        age: 18,
        province: '北京市',
        hobbies: ["sing", 'dance', 'piano']
    })
    console.log(ret3)
})

