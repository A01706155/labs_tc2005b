console.log('¡Hola!')
console.log('¡Genial!')

// ¿Qué es JSON?
// json: java script object notation
// {nombre_atributo: valor}

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/ruta2', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta2"'); 
});

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

app.listen(3000);