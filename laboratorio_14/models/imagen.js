const imagenes = ["https://www.rockybytes.com/i/25965/friday-night-funkin.jpg",
                  "https://miro.medium.com/max/724/0*kWO6blcatSGV6EIX",
                  "https://i.ytimg.com/vi/937YsZ6oPtI/maxresdefault.jpg",
                 ];

module.exports = class Imagen {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(imagen) {
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        imagenes.push(this.imagen);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return imagenes;
    }

}