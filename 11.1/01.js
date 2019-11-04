// public
var express = require("express")
var path = require("path")
var app = express()
// 静态资源中间件 express.staic  中间件必须通过use去使用
// 和express进行关联
var static = path.resolve(__dirname, "public")
// console.log(static)
app.use(express.static(static))
// 直接访问写死的路径
// app.use(express.static("./public"))
app.get("/", async (req, res) => {
    res.send("服务器搭建成功")
})
app.listen(3000)