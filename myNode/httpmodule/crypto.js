let crypto = require('crypto')


//md5
let hash = crypto.createHash('md5')
// let hash = crypto.createHash('sha1')

//可以多次调用update()
//update方法默认字符串编码为utf-8，也可以传入buffer
hash.update("1234")
hash.update("aaaa")  //
// console.log(hash.digest('hex'))  //十六进制显示
console.log(hash.digest('base64'))  //base64



//createHmac()  需要传入密钥
// let hash2 = crypto.createHmac('md5','rose')
let hash2 = crypto.createHmac('sha1','rose')
hash2.update('ssss')
console.log('---------')
console.log(hash2.digest('hex'))



// AES
// 加密
function encrypt(key,iv,data) {
     let dep = crypto.createCipheriv('aes-128-cbc',key,iv)
    return dep.update(data,'binary','hex') + dep.final("hex")
}

//解密
function decrypt(key,iv,crypted) {
    crypted = Buffer.from(crypted,'hex').toString('binary')
    let dep = crypto.createDecipheriv('aes-128-cbc',key,iv)  //要和加密的保持一致
    return dep.update(crypted,'binary','utf8') + dep.final('utf8')
}

let key = 'abcdef1234567890'  //十六进制
let iv = '1111111111111111'
let data = 'rose&jack'
let sryted = encrypt(key,iv,data)
console.log('加密')
console.log(sryted)



let decrypted = decrypt(key,iv,sryted)
console.log('解密')
console.log(decrypted)

