const Imagen = require('../models/imagen')

exports.get = (request, response, next) =>{
    response.render('imagenes', {
        lista_imagenes: Imagen.fetchAll(),
        titulo: 'Titulo',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
        csrfToken: request.csrfToken()
    }); 
};

exports.postImagen = (request, response, next) => {
    console.log(request.body.url);
    const nueva_imagen = new Imagen(request.body.url)
    nueva_imagen.save();
    response.redirect('/imagenes');
};