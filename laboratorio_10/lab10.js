console.log("hola")

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    
    if (request.url === "/about-us") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Sólo soy un estudiante</h1><h2>¿En qué te puedo ayudar?</h2></body>");
        response.write('<h3><a href="/">Regresar</a></h3>');
        
        response.write("</html>");
        response.end();
        
    } 

    else if (request.url === "/gustos") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Mis gustos</h1></body>");
        response.write("<li>Pizza</li>");
        response.write("<li>Naranjas</li>");
        response.write("<li>Videojuegos</li>");
        response.write("<li>Producción de video</li>");
        response.write('<h3><a href="/">Regresar</a></h3>');

        
        response.write("</html>");
        response.end();
        
    } 

    else if (request.url === "/videojuegos") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Mis videojuegos favoritos</h1></body>");
        response.write("<li>Minecraft</li>");
        response.write("<li>Halo 3</li>");
        response.write("<li>Rythm Heaven Tengoku</li>");
        response.write("<li>Blood and Bacon</li>");
        response.write('<h3><a href="/">Regresar</a></h3>');
        
        response.write("</html>");
        response.end();
        
    } 
    
    else if (request.url === "/pensamientos" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Subir un pensamiento</h1>");
        response.write("<h3>Los pensamientos son cosas increíbles, pueden ir desde una anécdota hasta a una increíble experiencia, por favor ingresa algo: 😀</h3>")
        response.write('<form action="pensamientos" method="POST"><input type="text" name="Pensar"><input type="submit" value="Muestra la magia"></form>')
        response.write("</body>");
        response.write("</html>");
        response.end();
    } 
    
    else if (request.url === "/pensamientos" && request.method === "POST") {
        let pensamientos = [];
        
        const fs = require('fs');
        request.on('data', (dato) => {
            pensamientos.push(dato);
        });
        
        return request.on('end', () => {
            response.setHeader('Content-Type', 'text/html');
            const sugerencias_completas = Buffer.concat(pensamientos).toString();
            const opinion = sugerencias_completas.split("=")[1];
            fs.writeFileSync('texto.txt', opinion+"\n")
            response.statusCode = 302;
            response.setHeader('Location','/sent');
            return response.end();
        });

    }

    else if (request.url === "/sent") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Tu pensamiento ha sido enviado</h1></body>");
        response.write("<h3>Esperamos que sea algo increíble.</h3>");
        response.write('<h3><a href="/">Regresar</a></h3>');
        
        response.write("</html>");
        response.end();
        
    } 
    
    else if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Lab 10</title></head>');
        response.write("<body><h1>Página de inicio</h1></body>");
        response.write("<body><h3>Links de interés:</h3></body>");
        response.write("<ol>")
        response.write('<li><a href="/about-us">About us</a>')
        response.write('<li><a href="/gustos">Mis gustos</a>')
        response.write('<li><a href="/videojuegos">Mis videojuegos favoritos</a>')
        response.write('<li><a href="/pensamientos">Flying thoughts</a>')
        response.write("</ol>")
        response.write("</html>");
        response.end();
    } 
    
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>¡Aquí no hay nada! - 404</h1></body>");
        response.write("</html>");
        return response.end();
    }   

    response.end();
});

server.listen(3000);