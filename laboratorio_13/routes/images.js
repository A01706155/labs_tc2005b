const express = require('express');

const router = express.Router();

const path = require('path');

const imagesController = require('../controllers/images_controller');

router.get('/', imagesController.get);

router.post('/', imagesController.postImagen);

module.exports = router;