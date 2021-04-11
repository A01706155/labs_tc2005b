const personajes = [
    {nombre: "Pico", imagen: "https://media.tenor.com/images/889572ee13c6a40d31607d9b350112a8/tenor.png"},
    {nombre: "Girlfriend", imagen: "https://images.gamebanana.com/img/ss/srends/5ff153b3b0f3e.jpg"}, 
    {nombre: "Dad", imagen: "<script>alert('You haven been hacked by Dad')</script>"},
    {nombre: "Mom", imagen: "https://i.pinimg.com/originals/0b/58/93/0b5893adca32845610b14c28e30466f8.jpg"}];

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
        return personajes;
    }

}