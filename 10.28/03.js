var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    // 设置出现一次防止重复
    if (req.url == "/favicon.ico") {
        return
    }
    if (req.url == "/") {
        fs.readFile("bar.html", (err, data) => {
            res.end(data)
        })
    }else if(req.url == "/foo"){
        fs.readFile("foo.html", (err, data) => {
            res.end(data)
        })
    }else{
        fs.readFile("404.html", (err, data) => {
            res.end(data)
        })
    }


}).listen(3000,function(err,data){
    console.log("服务器已经挂起");
})