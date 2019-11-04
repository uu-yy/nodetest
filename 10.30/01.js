var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    //普通获取数据的方式
    fs.readFile("./static/1.txt", (err, data) => {
        console.log(data);
        res.end(data)
    })
    // 通过流的方式去获取数据
    // pipe 创建文件读取流
    var fsStream = fs.createReadStream("./static/1.txt")     //source
    fsStream.pipe(res)

    // data接受数据   end数据完成
}).listen(3000)