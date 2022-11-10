//eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
module.exports={	//	先声明模块组件
    sum(...arg){	//采用ES6扩展运算符，将所有接收参数放到一个集合
        return eval(arg.join('+'))		//连接字符串，并计算
    }

}
