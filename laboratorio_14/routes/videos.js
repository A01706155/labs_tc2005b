const express = require('express');

const router = express.Router();

const path = require('path');

const videosController = require('../controllers/videos_controller');

router.use('/', videosController.getVideos);

module.exports = router;