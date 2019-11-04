/*
* 流的类型?  四种
* readable stream 可读流    writale stream 可写流
* duplex 双工流（可读可写）   Transform 转换流
* zlib 数据的压缩
*
*
**/
var fs = require("fs")
// 压缩模块 zlib
var readSteam = fs.createReadStream("./static/1.txt")
var writeSteam = fs.createWriteStream("./static/1.txt.gz")
// 流支持链式操作  zlib.createGzip()创建压缩包
readSteam.pipe(zlib.createGzip().pipe(writeSteam))
