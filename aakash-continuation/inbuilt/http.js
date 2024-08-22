let http = require("http")

let server = http.createServer(function(req, res){
    res.write("<h1>Hi from express nodejs server | i am aboje gabriel developer</h1>")
    res.end()
})

server.listen(1234)