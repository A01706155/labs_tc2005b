const Usuario = require('../models/user');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;

    response.redirect('/');
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login')
    });
};

exports.getRegister = (request, response, next) => {
    response.render('register', {
        titulo: 'Registrar usuario',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};

exports.postRegister = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.nombre, request.body.username, request.body.password);
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/');
        }).catch(err => console.log(err));
};