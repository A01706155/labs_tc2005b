const Personaje = require('../models/personaje');

exports.getNuevoPersonaje = (request, response, next) => {
    response.render('nuevoPersonaje', {
        titulo: "Nuevo Personaje",
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoPersonaje = (request, response, next) => {
    console.log(request.body.nombre);
    const nuevo_personaje = new Personaje(request.body.nombre, request.body.imagen);
    nuevo_personaje.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ult_personaje='+nuevo_personaje.nombre + '; HttpOnly']);
            response.redirect('/personajes');
        }).catch(err => console.log(err));
};

exports.getPersonaje = (request, response, next) => {

    const id = request.params.personaje_id;

    Personaje.fetchOne(id)
    .then(([rows, fieldData]) => {
        response.render('personajes', { 
            lista_personajes: rows, 
            titulo: 'Personajes',
            isLoggedIn: request.session.isLoggedIn === true ? true : false
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.get = (request, response, next) => {

    // Request manual de Cookies
    console.log('Ultimo personaje: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[0].trim().split('=')[1]);
    
    // Request mediante cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ult_personaje);

    Personaje.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('personajes', { 
            lista_personajes: rows, 
            titulo: 'Personajes',
            isLoggedIn: request.session.isLoggedIn === true ? true : false
        });
    })
    .catch(err => {
        console.log(err);
    });
};