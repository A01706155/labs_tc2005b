const express = require('express');

const router = express.Router();

const path = require('path');

const personajes = ["Boyfriend", "Girlfriend", "Monster", "The Mom", "Daddy Dearest", "Senpai"];

router.get('/nuevo-personaje', (request, response, next) => {
    response.send('<h1>Nuevo Personaje</h1><body><h2>Añadir un personaje</h2><form action="nuevo-personaje" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar personaje"></form>'); 
});

router.post('/nuevo-personaje', (request, response, next) => {
    console.log(request.body.nombre);
    personajes.push(request.body.nombre);
    response.redirect('/personajes');
});

router.use('/', (request, response, next) => {
    let html = '<h1>Personajes</h1><ul>';
    for (let personaje of personajes) {
        html = html + '<li>' + personaje + '</li>';
    }
    html = html + '</ul>'
    html = html + '<a href="/personajes/nuevo-personaje">Añadir nuevo personaje</a><p><a href="/">Volver</a>'
    response.send(html); 
});

module.exports = router;