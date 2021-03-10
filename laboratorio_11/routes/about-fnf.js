const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (request, response, next) => {
    response.send('Friday Night Funkin es un juego de ritmo que trata de un niño que intenta convencer a una niña de ser su novia demostrando que sabe darle al Funk. En su historia se atraviesan sus padres, el padre es quien pone los primeros obstáculos antes de que por fin el niño pueda tener a su hija. Se popularizó mucho hace un mes en YouTube, han salido una multitud de mods para el mismo con memes y creaciones totalmente nuevas y originales. Eso está impulsando el desarrollo del juego para que tenga una historia más completa. <p> <a href="/">Volver</a>'); 
});

module.exports = router;