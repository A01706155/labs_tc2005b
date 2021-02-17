//ej1()
//ej2()
//ej3()
//ej4()
//ej5()
//ej6()

function validar(){
    var password = document.getElementById("contrasena").value;
    var confirmPassword = document.getElementById("contrasena2").value;
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
            document.getElementById("passback").innerHTML = "¡Contraseña validada!"
            return true;
        }
    }
}