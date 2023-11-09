const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

let port = +process.env.PORT || 8080;

// function htmlResponse(res, content) {
//     res.writeHead(200, { "Content-Type": "text/html; charset= utf-8" });
//     res.end(content);
// }

// const server = http.createServer(function (req, res) {


// });

server.listen(port, function () {
    console.log("http://localhost:" + port);
});