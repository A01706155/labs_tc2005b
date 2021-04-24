const express = require('express');

// Para proteger rutas
const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const aboutFNFController = require('../controllers/about-fnf_controller');

router.get('/', isAuth, aboutFNFController.getAboutFNF);

module.exports = router;