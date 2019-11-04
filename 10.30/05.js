/**
 * 什么是buffer?
 * 从类型来说，就是一个类数组
 * 从内存来说，就是开天辟地的新内存空间
 * 作用：
 * 处理二进制数据
 * 解决数据过大
 * 案例：文件流 事件流 Tcp
 * 别名：缓存区（等候区）
 * 什么是二进制数据？ 
 * 返回0和1
 * 创建buffer?
 * new buffer()   废弃
 * buffer不需要jQuery加载,因为buffer是一个全局对象
 * buffer可以传输的类型？
 * string, Buffer, ArrayBuffer, Arry, or Arry-like Object
 * buffer下面有哪些方法？
 * toJSon toString slice contact length
 * 字节 bit byte
 * buffer的编码类型?
 * utf-8 base64 hex Ascii unicode
 * buffer和cache的区别?
 * buffer叫做缓存区   cache叫做缓存
 * buffer相当于临时居住地 cache永久的家
 * */
//第一种定义buffer的方式
// Buffer.from 把字符串转buffer
var buf = Buffer.from("node")
// <Buffer 6e 6f 64 65>
// var buf=Buffer.from()
// 返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf=Buffer.alloc(10)
// 不安全 不推荐使用  未被初始化的buffer
// var buf=Buffer.allocUnsafe()
// hef
console.log(buf.toString("base64"));

// template  模板