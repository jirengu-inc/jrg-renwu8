/**
 * Created by fm on 2016/12/28.
 */
var http = require('http');
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    if(request.url==="/page.json")
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        // 发送响应数据 "Hello World"
        response.end('{"name":"babybear"}');
    }else if(request.url==="/test.html"){
        response.writeHead(200, {'Content-Type': 'text/html'});
    // 发送响应数据 "Hello World"
        var fs = require('fs');
        response.end(fs.readFileSync('./test.html'));
    }
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

var lock=false;
ele.addEventListener("click",function () {
    if(!lock){
        lock=true;
        ajax();
        lock=false;
    }
})