// Base de datos
const Usuario = require('../models/user');
// Encriptador (Aqui 'desencriptamos')
const bcrypt = require('bcryptjs');


exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
        error: request.session.error,
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};

exports.postLogin = (request, response, next) => {
    request.session.error = "";
    
    const username = request.body.usuario;
    
    // console.log(username);
    
    Usuario.fetchOne(username)
        .then(([rows, fieldData]) => {
            if (rows.length < 1) {
                request.session.error = "El usuario y/o contraseña no coinciden";
                response.redirect('/');
            } else {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.usuario = request.body.usuario;
                            return request.session.save(err => {
                                response.redirect('/');
                            });
                        }
                        request.session.error = "El usuario y/o contraseña no coinciden";
                        response.redirect('/users/login');
                    }).catch(err => {
                        request.session.error = "El usuario y/o contraseña no coinciden";
                        response.redirect('/users/login');
                    });
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login')
    });
};

exports.getRegister = (request, response, next) => {
    response.render('register', {
        titulo: 'Registrar usuario',
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};

exports.postRegister = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.nombre, request.body.username, request.body.password);
    nuevo_usuario.save()
        .then(() => {
            request.session.isLoggedIn = true;
            request.session.Usuario = request.body.usuario;
            response.redirect('/');
        }).catch(err => console.log(err));
};