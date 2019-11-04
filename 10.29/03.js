/*
*   1.定义一个路由文件router.js
*   2.在router
*
*
*
 */
var http = require("http")
var fs = require("fs")
var router = require("./static/router")
http.createServer((req, res) => {
    // req.urly 
    // if (req.url == "/") {
    //     router.home(req, res)
    // } else if (req.url == "/about") {
    //     router.about(req, res)
    // } else if (req.url == "/news") {
    //     router.news(req, res)
    // } else {
    //     res.end("404")
    // }



    switch (req.url) {
        case "/": router.home(req, res)
        break;
        case "/about": router.about(req, res)
        break;
        case "/news": router.news(req, res)
        break;
    }

}).listen(3000)