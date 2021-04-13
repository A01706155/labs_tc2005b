const express = require('express');

// Para proteger rutas
const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const personajesController = require('../controllers/personajes_controller');

router.get('/nuevo-personaje', isAuth, personajesController.getNuevoPersonaje);

router.post('/nuevo-personaje', isAuth, personajesController.postNuevoPersonaje);

router.get('/:personaje_id', isAuth, personajesController.getPersonaje);

router.use('/', isAuth, personajesController.get);

module.exports = router;