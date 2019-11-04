var fs = require("fs")
var http = require("http")
http.createServer((req, res) => {
    // 读文件   异步读取
    fs.readFile("./static/1.txt", (err, data) => {
        res.end(data);
    })
    // // 同步读取
    // var a = fs.readFile("./static/1.txt")
    // res.end(a)

    // // 写文件 writeFile
    // fs.writeFile("./static/1.txt", "jksldfkldsffffff", (err) => {
    //     if (err) throw err
    //     res.writeFile(200, { "content-type": "text/html;charset=utf-8" })
    //     res.end("写入成功")
    // })


    // // 追击内容   {flag:a}   append
    // fs.appendFile("./static/1.txt", "追加的内容", (err) => {
    //     if (err) throw err
    //     res.end("append success")
    // })
    // // 创建目录
    // fs.mkdir("./aa", (err) => {
    //     if (err) throw err
    //     res.end("success")
    // })
    // // 创建文件
    // fs.writeFile("./static/2.txt", "newcontent", (err) => {
    //     if (err) throw err
    //     res.writeFile(200, { "content-type": "text/html;charset=utg-8" })
    //     res.end("写入成功")
    // })
    // // 删除文件
    // fs.unlink("./static/2.txt", (err) => {
    //     if (err) throw err
    //     res.end("success")
    // })
    // // 删除目录
    // fs.rmdir("./aa", (err) => {
    //     if (err) throw err
    //     res.end("success")
    // })
    // // 判断文件状态
    // fs.stat("./static", (err, stats) => {
    //     console.log(stats.isDirectory())
    //     // console.log(stats.isFile())
    //     res.end("222")
    // })
    // // 改名称
    // fs.rename("./static/1.txt", "./static/2.txt", (err) => {
    //     if (err) throw err
    //     res.end("change name success")
    // })
    // 复制文件  copyFile
    // 打开文件
    // 关闭文件
    /*
    * 1.判断当前目录 (static) 里面的是文件还是目录
    * 2.如果是目录则把目录输入出来
    */
}).listen(3000)