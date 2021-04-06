const express = require('express');

const router = express.Router();

const path = require('path');

router.use('/', (request, response, next) => {
    response.render('plantilla', {
        titulo: 'Videos',
        contenido: '<h1>Videos</h1> <p><a href="https://youtu.be/ChWVy-mkCNQ"><h4>What is Friday Night Funkin?</h4> <iframe width="560" height="315" src="https://www.youtube.com/embed/ChWVy-mkCNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </a> <p><a href="https://youtu.be/vkJzu9ZCBSw?t=30"><h4>FNF Walkthrough by VSauce</h4> <iframe width="560" height="315" src="https://www.youtube.com/embed/vkJzu9ZCBSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p> <a href="/"><h5>Volver</h5></a>',
    }); 
});

module.exports = router;