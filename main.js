const http = require('http');
const fs = require('fs');

//設定port號，這邊多少都可以，不要和現有的port重複就好
const port = process.env.PORT || 3000;

//新增一個server並指定他的頁面資訊，內容為'Hello World!'
const server = http.createServer((req, res) => {
    fs.readFile('hw1-0612201-李俞鋒.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);