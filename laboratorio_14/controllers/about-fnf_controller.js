exports.getAboutFNF = (request, response, next) => {
    response.render('plantilla', {
        titulo: 'Acerca de FNF',
        contenido: '<p> <div class="card-panel"> <span class="blue-text text-darken-2"> <h5>Friday Night Funkin es un juego de ritmo que trata de un niño que intenta convencer a una niña de ser su novia demostrando que sabe darle al Funk. En su historia se atraviesan sus padres, el padre es quien pone los primeros obstáculos antes de que por fin el niño pueda tener a su hija. Se popularizó mucho hace un mes en YouTube, han salido una multitud de mods para el mismo con memes y creaciones totalmente nuevas y originales. Eso está impulsando el desarrollo del juego para que tenga una historia más completa.</h5> </span> </div> <p> <a href="/"><h5>Volver</h5></a>',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};
