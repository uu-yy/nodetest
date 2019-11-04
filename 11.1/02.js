// public
var express = require("express")
var app = express()
var path = require("path")
var cookieParser = require("cookie-parser")
// 让express 和 cookie建立连接
app.use(cookieParser())
console.log(cookieParser)
var static = path.resolve(__dirname, "public")
app.use(express.static(static))
app.get("/", (req, res) => {
    console.log("首页中获取:" + req.cookies)
    res.send({ "data": "login中的cookie为:" + req.cookies })
})
// 设置 setcookie
app.get("/login", (req, res) => {
    var obj = req.query.username
    // req.cookies.cookiename = obj
    // 设置cookie maxAge 过期时长 httponly 只允许服务器端修改cookie值
    res.cookie("username", obj, { maxAge: 90000, httpOnly: true })
    res.send({ "data": obj })

})
// 获取 getcookie
app.get("/list", (req, res) => {
    // 获取cookie
    console.log("req.cookies".cookiename)
    res.send()
})
app.listen(3000)