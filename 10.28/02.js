// require 加载
var http = require("http");   
var fs = require("fs")
var Service = http.createServer(function (req, res) {
	// 读文件
	fs.readFile("index.html", function (err, data) {
		console.log(data.toString())
		res.end(data)
	});

})
Service.listen(5000, function () {
	console.log("服务器已经挂起");
})