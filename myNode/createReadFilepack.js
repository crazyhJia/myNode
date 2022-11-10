//创建目录
// fs.mkdir(path,[mode],callback)

// 读取目录
// readdir(path,calllback);
// 查看文件夹或文件的状态
// fs.stat(path,callback)


var fs=require("fs");
var p=require('path');
fs.mkdir('C:/Users/hj/Desktop/hello/7','0666',function(err){
    if(err){
        console.log("文件夹创建失败---1");
    }
});

var path1=p.resolve(__dirname,'C:/Users/hj/Desktop/hello/7');
for(var i=0;i<5;i++){ //
    var filename=i+'.txt';
    console.log(filename);
    var path=p.resolve(__dirname,'C:/Users/hj/Desktop/hello/7')+p.sep+filename;

    console.log(path);
    fs.writeFile(path,'',{flag:'w',encoding:'utf-8'},function(err){
        if(err){
            console.log("创建文件失败---2");
        }
    })
}
fs.readdir(path1,function(err,files){

    console.log('--------------------')
    if(err){ //
        console.log("读取文件夹失败--3");
    }else{
        console.log(files);
        console.log(files.length);
        fs.stat(path1,function(err,stat){
            if(err){ //
                console.log("获取文件夹7状态值失败--4");
            }else{
                //console.log(stat);
                if(stat.isDirectory()){
                    console.log("是一个文件夹")
                }
                if(stat.isFile()){
                    console.log("是一个文件")
                }
            }
        })
        for(var i=0;i<files.length;i++){
            var  path2=path1+p.sep+files[i];
            fs.stat(path2,function(err,stat){
                if(err){
                    console.log("读取文件失败---5---"+i);
                }else{
                    //console.log(stat);
                    if(stat.isFile()){
                        console.log("是一个文件")
                    }
                    if(stat.isDirectory()){
                        console.log("是一个文件夹")
                    }
                }
            })
        }
    }
})
