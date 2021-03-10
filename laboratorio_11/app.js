//¿Qué es json? (describir)
//json: javascript object notation, me parece una lista con toda la información de las librerías que tenemos funcionando junto a un auto-actualizador para siempre estar en la última versión de las mismas.
//{nombre_atributo: valor} - ????????

console.log('¡Hola mundo!');

// "Librerías"
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Para ir a rutas externas se define una variable con la ubicación del js al respecto
const personajes = require('./routes/personajes');
const aboutfnf = require('./routes/about-fnf')
const imagenes = require('./routes/images')
const videos = require('./routes/videos')

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// Primero se establece este para más prioridad
app.use('/about-fnf', aboutfnf);
app.use('/personajes', personajes);
app.use('/imagenes', imagenes);
app.use('/videos', videos);

// Ruta principal
app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    response.send('<h1>Videojuegos:</h1> <body><h3>Friday Night Funkin:</h3></body><ol><li><a href="/about-fnf">About the game</a><li><a href="/personajes">Personajes</a><li><a href="/imagenes">Imágenes</a><li><a href="/videos">Videos</a></ol>')
});

// Fallback para rutas no conocidas
app.use( (request, response, next) => {
    response.status(404); // Envía un código de estátus al navegador
    response.send('<h1>¿Qué buscas?, amigo. <p> <img width=30%; src="https://static3.lasprovincias.es/www/multimedia/202010/10/media/cortadas/gato-ksgH-U1204237773070s-1248x770@Las%20Provincias.jpg"> <h2> Error 404!'); //Manda la respuesta
} );

app.listen(3000);