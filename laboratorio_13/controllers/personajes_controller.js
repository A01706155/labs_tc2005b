const Personaje = require('../models/personaje');

exports.getNuevoPersonaje = (request, response, next) => {
    response.send('<html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Nuevo personaje</title> <link rel="stylesheet" href="../css/materialize.css"> </head> <body> <script src="../js/lab_6.js"></script> <header> <div class="navbar-fixed"> <nav> <div class="nav-wrapper blue darken-3"> <a href="/" class="brand-logo">Friday Night Funkin</a> <ul class="right hide-on-med-and-down"> <li>Manolo Ramírez Pintor - A01706155</li> </ul> </div> </nav> </div> </header> <main class="container"> <h2>Añadir un nuevo personaje:</h1> <body> <form action="nuevo-personaje" method="POST"><input type="text" name="nombre"><input type="submit" value="Añadir personaje"></form> </main> <footer class="page-footer blue darken-3"> <div class="container"> <div class="row"> <div class="col l6 s12"> <h5 class="white-text">Información del sitio:</h5> <p class="grey-text text-lighten-4">Website creado por FoxWare <p>Para hacer esta página web utilicé <a class="red-text text-lighten-2" target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a></p></p></div> <div class="col l4 offset-l2 s12"> <h5 class="white-text">Links</h5> <ul> <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/foxware">YouTube</a></li> <li><a class="grey-text text-lighten-3" href="https://steamcommunity.com/id/foxware1800">Steam</a></li> <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/foxware1800/">Instagram</a></li> <li><a class="grey-text text-lighten-3" href="https://github.com/A01706155">GitHub</a></li> </ul> </div> </div> </div> <div class="footer-copyright"> <div class="container"> <div class="center-align">© 2021 FoxWare / Manolo Ramírez Pintor A01706155</div> <div class="center-align">Creado con la ayuda de Materialize (y vistas dinámicas).</div> </div> </div> </footer> </body> </html>'); 
};

exports.postNuevoPersonaje = (request, response, next) => {
    console.log(request.body.nombre);
    const nuevo_personaje = new Personaje(request.body.nombre)
    nuevo_personaje.save();
    response.redirect('/personajes');
}

exports.get = (request, response, next) => {
    response.render('personajes', 
    {lista_personajes: Personaje.fetchAll(),
    });
};