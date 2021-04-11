const express = require('express');

const router = express.Router();

const path = require('path');

const users = require('../controllers/users_controller');
const { route } = require('./about-fnf');

router.get('/login', users.getLogin); // users/login

router.post('/login', users.postLogin);

router.get('/logout', users.logout);

module.exports = router;