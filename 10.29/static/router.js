// 路由试图
function home(req, res) {
    res.end("home")
}
function about(req, res) {
    res.end("about")
}
function news(req, res) {
    res.end("news")
}
exports.home = home
// exports.home("类名")=home
exports.about = about
exports.news = news


