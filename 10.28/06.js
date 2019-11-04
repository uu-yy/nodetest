var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    // parse(序列化)

    // var result="http://localhost:3000/?username=123&password=123&age=232"
    // var obj=url.parse(result,true)



    // format(反序列化)


    // var obj=url.format({
    //     protocol: 'http:',
    //     slashes: true,
    //     auth: null,
    //     host: 'localhost:3000',
    //     port: '3000',
    //     hostname: 'localhost',
    //     hash: null,
    //     search: '?username=123&password=123&password=123',
    //     query:'?username=123&password=123&password=123',
    //     pathname: '/',
    //     path: '/?username=123&password=123&age=232',
    //     href: 'http://localhost:3000/?username=123&password=123&age=232'
    // })

    var obj = url.resolve("http://localhost:300", "/new")
    console.log(obj);
    res.end()
}).listen(3000, function () {
    console.log("服务器已经挂起")
})