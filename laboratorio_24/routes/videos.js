const express = require('express');

// Para proteger rutas
const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const videosController = require('../controllers/videos_controller');

router.use('/', isAuth, videosController.getVideos);

module.exports = router;