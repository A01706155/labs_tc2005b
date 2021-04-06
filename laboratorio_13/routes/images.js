const express = require('express');

const router = express.Router();

const path = require('path');

router.use('/', (request, response, next) => {
    response.render('plantilla', {
        titulo: 'Imagenes',
        contenido: '<h1>Imágenes</h1><p><img width="600px"; src="https://www.rockybytes.com/i/25965/friday-night-funkin.jpg"> <p> <img width="600px"; src="https://miro.medium.com/max/724/0*kWO6blcatSGV6EIX"> <p> <img width="600px"; src="https://i.ytimg.com/vi/937YsZ6oPtI/maxresdefault.jpg"> <p> <a href="/"><h5>Volver</h5></a>',
    }); 
});

module.exports = router;