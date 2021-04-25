const express = require('express');

// Para proteger rutas
const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const users = require('../controllers/users_controller');
const { route } = require('./about-fnf');

router.get('/login', users.getLogin); // users/login

router.post('/login', users.postLogin);

router.get('/logout', isAuth, users.logout);

router.get('/register', users.getRegister);

router.post('/register', users.postRegister);

module.exports = router;