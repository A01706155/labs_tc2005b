console.log("hola")

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    response.setHeader('Content-Type', 'text/html');
    response.write("Hola desde el servidor");
    response.end();
});

server.listen(3000);