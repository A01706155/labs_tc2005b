exports.action = (request, response, next) => {
    response.render('view_file', { 
        atribute_1: 'Data 1', 
        atribute_2: 'Data 2',
        isLoggedIn: request.session.isLoggedIn === true ? true : false,
    });
};