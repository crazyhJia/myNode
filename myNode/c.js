//首先引入A模块
let B = require('./b')		//一定要加 ./ 后缀可以省略

module.exports= {	//	先声明模块组件
    avg(...arg) {	//(这里arg将会是C组件传过来的一个数组)
        //把一个数组中的每一项通过展开运算符展开，分别传给sum，然后除以数组的长度
        return B.sum(...arg) / arg.length
    }
}
