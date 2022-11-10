const fs = require('fs');
const path = require('path');

const readDir = (url) => {
    const dirInfo = fs.readdirSync(url);

    dirInfo.map(item=>{
        const location = path.join(url, item);
        const info = fs.statSync(location);

        if(info.isDirectory()){
            readDir(location);
        }else{
            console.log(`file:${location}`);
        }
    });
}
 __dirname = 'C:/Users/hj/Desktop/vue/myvue/pack/node_modules'
readDir(__dirname);
