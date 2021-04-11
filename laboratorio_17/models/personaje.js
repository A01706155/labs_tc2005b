const db = require('../util/database');

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        
        const personajes = [];
        
        db.execute('SELECT * FROM personajes')
            .then(([rows, fieldData]) => {
                for (let personaje of rows){
                    // console.log(personaje.nombre);
                    personajes.push({nombre: personaje.nombre,
                                     imagen: personaje.imagen});
                }
                // console.log(rows);
            })
            .catch(err => {
                console.log(err);
            });
            
        return personajes;
    }

}