//ej1()
//ej2()
//ej3()
//ej4()
//ej5()
//ej6()

function validar(){
    let password = document.getElementById("contrasena").value;
    let confirmPassword = document.getElementById("contrasena2").value;
    if (password == ""){
        alert("¡Escribe algo en el campo de contraseñas!");
    }
    else{
        if (password != confirmPassword) {
            document.getElementById("passback").style.color = "red";
            document.getElementById("passback").innerHTML = "¡Contraseñas no iguales!";
            return false;
        }
        else{
            document.getElementById("passback").style.color = "yellowgreen";
            document.getElementById("passback").innerHTML = "¡Contraseña validada!";
            return true;
        }
    }
}

function checkout(){

    let dc = (document.getElementById("dreamcast").value);
    let pc = (document.getElementById("pc").value);
    let xone = (document.getElementById("xone").value);

    let total_prod = (dc*199) + (pc*699) + (xone*399);
    let total_iva = total_prod*0.16
    let total = total_prod + total_iva;
    if (dc <= -1 || pc <= -1 || xone <= -1){
        alert("No me puedes vender productos. xD")
    }
    else{
        if (dc+pc+xone == 0){
            alert("No has comprado ningún producto.")
        }
        else {
            document.getElementById("confirmacion").innerHTML = "Has comprado " + dc + " Dreamcasts, " + pc + " PCs Gamer y " + xone + " Xbox ones por $" + total_prod + " + $" + total_iva + " (IVA 16%), con el precio final de: $" + total;
        }
    }
}