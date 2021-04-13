console.log('¡Servidor iniciado!');
// console.log('Ya no tuve que detener el servidor');
// console.log('Genial!');

// ¿Qué otros templating engines existen para node?
// Respuesta: Pug, Handlebars y Cross-site Scripting (XSS)

// Importación de las librerías a utilizar
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const cookieParser = require('cookie-parser')

const session = require('express-session');

// Para proteger rutas
const isAuth = require('./util/is-auth');

// Sirve para establecer las carpetas de view engine y views
app.set('view engine', 'ejs');
app.set('views', 'views');

const aboutfnf = require('./routes/about-fnf')
const personajes = require('./routes/personajes');
const imagenes = require('./routes/images')
const videos = require('./routes/videos')
const users = require('./routes/users');

//Middleware
  // Para acceder fácilmnte a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));
  // Para acceder a los valores de las Cookies
app.use(cookieParser());
  // Para trabajar con sesiones
app.use(session({
    secret: 'No soy furry pero debo decir que Spaicy es un error.', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/about', aboutfnf);
app.use('/personajes', personajes);
app.use('/imagenes', imagenes);
app.use('/videos', videos);
app.use('/users', users);

app.get('/', isAuth, (request, response, next) => {
    console.log('Bienvenido');
    response.render('plantilla', {
        titulo: 'Inicio',
        contenido: '<h3>Friday Night Funkin:</h3> <a href="/about" class="waves-effect waves-light btn-large blue lighten-4 black-text">About the game</a> <p> <a href="/personajes" class="waves-effect waves-light btn-large blue lighten-4 black-text">Personajes</a> <p> <a href="/imagenes" class="waves-effect waves-light btn-large blue lighten-4 black-text">Imagenes</a> <p> <a href="/videos" class="waves-effect waves-light btn-large blue lighten-4 black-text">Videos</a>',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    }); 
});

app.use( (request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('Error 404.'); //Manda la respuesta
} );

app.listen(3000);

// Falta la página de personajes