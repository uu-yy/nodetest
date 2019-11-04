// createReadStream  createWriteStream
// 事件 data end 
var fs = require("fs")
var http = require("http")
http.createServer((req, res) => {

}).listen(3000)
var readStream = fs.createReadStream("./static/1.txt")
var length = 0
// 探究数据流转的过程
// chunks 日志
readStream.on("data", (chunks) => {
    length++;
    console.log(chunks.toString())
})
readStream.on("end", () => {
    console.log(length)
})

