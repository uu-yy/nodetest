//初始服务器
//node 模块
//加载http模块
var http = require("http")
//创建服务器
var Service = http.createServer(function (req, res) {
	//设置请求头响应
	res.writeHead(200, {
		"content-type": "text/html;charset=utf-8"
	})
	//req requeat  请求 res reposnse 响应
	//结束响应        响应客户端
	res.end("中国");
})
//监听端口
Service.listen(3000, function () {
	console.log("服务器已经挂起");
})