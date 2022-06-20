// 引入http
const http = require('http');

// 设置主机地址和端口号
const hostname = '127.0.0.1';
const port = 3000;

// 创建server服务
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    // 设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello, World!\n');

    // console.log(req);
    // console.log(res);
});

// 监听服务器运行
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});