const http = require('http');
const url = require('url');
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);

    const params = url.parse(req.url, true).query;

    res.write('<h1>Nome: '+params.name+'</>');

    if(req.url == '/'){
        res.write("<h1>Seja bem vindo</h1>");
    } else if(req.url == '/a1') {
        res.write("<h1>A1</h1>");
    } else if(req.url == '/a2') {
        res.write("<h1>A2</h1>")
    } 

    res.end();
});

server.listen(port, host, 'Servidor rodando');