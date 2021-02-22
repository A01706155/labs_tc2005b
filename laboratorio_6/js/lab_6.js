let pass1 = document.getElementById("contrasena");
let pass2 = document.getElementById("contrasena2");

function validar() {
    
    if (pass1 == "") {
        alert("¡Escribe algo en el campo de contraseñas!");
    }
    
    else {
        function validar2() {

                // Validate lowercase letters
            let lowerCaseLetters = /[a-z]/g;
            if(pass1.value.match(lowerCaseLetters)) {  
                let minuscula = true;
            } 
            else {
                let minuscula = false;
            }

            // Validate capital letters
            let upperCaseLetters = /[A-Z]/g;
            if(pass1.value.match(upperCaseLetters)) {  
                let capital = true;
            } 
            else {
                let capital = false;
            }

            // Validate numbers
            let numbers = /[0-9]/g;
            if(pass1.value.match(numbers)) {  
                let numero = true;
            } else {
                let numero = false;
            }

            // Validate length
            if(pass1.value.length >= 8) {
                let largo = true;
            } 
            else {
                let largo = false;
            }

            if (pass1 =! pass2){
                alert("Verifica que las contraseñas sean iguales")
            }
            else{
                if (minuscula && capital && numero && largo == true) {
                    alert("¡La vericiación fue exitosa!")
                }
                else{
                    alert("Verifica los requerimentos que te pedimos.")
                }
            }
            

        }
    }
}