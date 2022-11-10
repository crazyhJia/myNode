
 function render(res,data,type='') {
    res.writeHead(200, {"Content-Type": `${type?type:"application/json"};charset=utf8`})
    res.write(data);
    res.end();
}

const apiRouter = {
    '/api/data': (req,res) => {
        let myurl = new URL(req.url, 'http://127.0.0.1');
        console.log(myurl.searchParams.get('username'))
        render(res, `{ok: 123}`)
    },
    '/api/getLogin': (req,res) => {
        let myurl = new URL(req.url, 'http://127.0.0.1');
        if(myurl.searchParams.get('username') === 'rose' &&
            myurl.searchParams.get('password') === 'aaa') {
            render(res, `{"ok": "对了"}`)
        } else{
            render(res, `{"ok": "错了"}`)
        }
    },
    '/api/postLogin': (req,res) => {
        let post = ''
        req.on('data',chunk => {
            post += chunk;
        })
        req.on('end', () => {
            post = JSON.parse(post);   //一定注意JSON.parse()入参不能是空字符串
            if(post.username === 'rose' && post.password === 'aaa') {
                render(res, `{"ok": "0"}`)   //JSON官方明确规定，JSON数据的key与value必须使用双引号""包裹，否则在转换过程中会导致错误。
            } else{
                render(res, `{"ok": "1"}`)
            }
        })
    },
}

module.exports = apiRouter
