const express = require('express');

// Para proteger rutas
const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const imagesController = require('../controllers/images_controller');

router.get('/', isAuth, imagesController.get);

router.post('/', isAuth, imagesController.postImagen);

module.exports = router;