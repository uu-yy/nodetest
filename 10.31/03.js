// 接受get请求传输的参数
var express = require("express")
var app = express()
app.get("/", (req, res) => {
    res.send("默认请求")
})
app.get("/list", (req, res) => {
    console.log("接受的参数为" + req.query.username)
    res.send({ "data": req.query })
})
// params 参数
app.get("/getod/:id", (req, res) => {
    console.log(req.params.id)
    res.send({ "data": "接受的数据为" + req.params.id })
})
app.listen(3000)