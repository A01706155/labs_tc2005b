const express = require('express');

const router = express.Router();

const path = require('path');

const aboutFNFController = require('../controllers/about-fnf_controller');

router.get('/', aboutFNFController.getAboutFNF);

module.exports = router;