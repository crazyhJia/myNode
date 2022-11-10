let str = 'name=ss&age=19&addr=beijing';
let querystring = require('querystring');

let obj = querystring.parse(str);
 console.log(obj)

let o = { name: 'ss', age: '19', addr: 'beijing' }
console.log(querystring.stringify(o))
