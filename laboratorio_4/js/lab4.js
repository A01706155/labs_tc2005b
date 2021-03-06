// Se adaptó el funcionamiento a HTML

ej1()
ej2()
ej3()
ej4()
ej5()
ej6()

function ej1 (){

    // Pedir número al usuario
    let n = prompt("Ej1: Crear tabla de cuadrados y cubos\nIngresa un número:");
    
    // Inicio para lista
    document.write("<h3><li> Problema 1 <p></h3>")

    // Comenzar a hacer la estructura de la tabla
    document.write("<table> <tr> <td>n</td> <td> ² </td> <td> ³ </td>");
    
    // Ciclo para generar la tabla
    for (let i = 1; i <= n; i++){
        let cuadr = Math.pow(i, 2); let cubo = Math.pow(i,3);
        document.write("<table> <tr> ","<td>",i,"</td> <td>", cuadr ,"</td> <td>", cubo ," </td> </tr></table>");
    }

    // Fin para lista
    document.write("</p></li>")

}

function ej2(){
    
    // Inicio para lista
    document.write("<h3><li> Problema 2 <p></h3>")
    
    // Generar suma y resultado en memoria
    let random1 = Math.floor(Math.random() * 15);
    let random2 = Math.floor(Math.random() * 15);
    let sum = random1 + random2;

    // Contar el tiempo y obtener respuesta
    let t1 = new Date().getTime();
    let result = prompt("Ej2: Pregunta suma\nCual es la suma de: " + random1 + "+" + random2);
    let t2 = new Date().getTime();
    let tiempo = (t2-t1)/1000;

    // Comprobar si la respuesta es correcta y regresar el tiempo
    if (result == sum){
        document.write("¡Muy bien!, te tardaste " + tiempo + " segundos");
    }
    else{
        document.write("¡Así no!, el resultado era " + sum);
    }

    // Fin para lista
    document.write("</p></li>")

}


function ej3(){
    
    // Preguntar al usuario el número de elementos para el arreglo, variables
    n = prompt("Ej3: Contador de 0's +'s y -'s\nIngresa un número de elementos para el arreglo")
    
    let array = []

    // Inicio para lista
    document.write("<h3><li> Problema 3 <p></h3>")

    // Crear números aleatorios y meterlos a un arreglo
    for (let i = 0; i <= n - 1; i++){
        let numeros =  Math.floor(Math.random() * (11 - -10)) + -10;;
        array.push(numeros);
    }

    // Establecer variables para cada contador
    let ceros = 0;
    let positivos = 0;
    let negativos = 0;

    // Contar cada tipo de numero que haya: ceros, positivos, negativos
    for (let i = 0; i <= array.length; i++){
        if (array[i] == 0){
            ceros++;
        }
        else if (array[i] < 0){
            negativos++;
        }
        else if (array[i] > 0){
            positivos++;
        }
    }

    document.write("El arreglo tuvo " + ceros + " ceros " + negativos + " negativos y " + positivos + " positivos.");

    // Fin para lista
    document.write("</p></li>")

}

function ej4(){
    
    // Preguntar datos al usuario, variables
    let nums_R = prompt("Ej4 (pt1): Creación de matrices\nIngresa cuántos números quieres en un renglón:");
    let renglones = prompt("Ej4 (pt2): Creación de matrices\nIngresa el número de renglones a crear:")
    let matrix = []

    // Inicio para lista
    document.write("<h3><li> Problema 4 <p></h3>")

    // Crear números aleatorios del 0 al 100 para cada renglón
    while (renglones > 0){
        let renglon = [];
        
        for (let i = 0; i <= nums_R - 1; i++){
            let rnd_num =  Math.floor(Math.random() * 100);
            renglon.push(rnd_num);
        }
        matrix.push(renglon);
        renglones--;
    }
    
    // Cálculo del promedio, y es para el numero de renglon
    for (let y = 0; y < matrix.length; y++){
        let promedio = 0;
        let suma = 0;
		
        // Suma del renglon, x representa el numero que va recorriendo por ciclo
        for (let x = 0; x < matrix[y].length; x++){
            let new_n = matrix[y][x];
            suma += new_n;
        }

		// Para que no comencemos en 0, sumamos uno
        let n_renglon = y + 1;
        
        // Se calcula el promedio y devolvemos el resultado por ciclo
        promedio = suma / nums_R;
        document.write("El promedio del renglon " + n_renglon + " es " + promedio + "<p></p>");
    }

        // Fin para lista
        document.write("</p></li>")

}

function ej5(){

    // Inicio para lista
    document.write("<h3><li> Problema 5 <p></h3>")

    // Preguntar por el número
    let nums_R = prompt("Ej5: Numero invertido\nBienvenido al mundo de los espejos, dame un número:");
    let num_inv = "";

    // Invertir
    for (let i = nums_R.length - 1; i >= 0; i--){
        num_inv = num_inv + nums_R[i];
    }

    // Devolver valor
    document.write("El espejo dice que tu número es " + num_inv);

    // Fin para lista
    document.write("</p></li>")
}

// Para este ejercicio, sólamente los datos de entrada son dos medidas y todo esto generará áreas de figuras posibles
function ej6(){

    // Inicio para lista
    document.write("<h3><li> Problema 6 <p></h3>")

    function Figura(lado_a, lado_b){
        this.lado_a = lado_a;
        this.lado_b = lado_b;
        
        this.cuadrado = function() {
          document.write("<p> Existen dos áreas de cuadrado posibles: " + lado_a*lado_a + " y " + lado_b*lado_b + "</p>");
        };
        this.rectangulo = function(){
          document.write("<p> El área del rectángulo es de: " + lado_a*lado_b + "</p>");
        };
        this.triangulo = function(){
          document.write("<p> El área del triángulo es de: " + ((lado_a*lado_b)/2) + "</p>");
        };
        this.circulo = function(){
          document.write("<p> Existen dos áreas de círculos posibles: " + Math.floor(Math.pow(3.14*(lado_a/2),2)) + " y " + Math.floor(Math.pow(3.14*(lado_b/2),2)) + "</p>");
        };
        this.rombo = function(){
          document.write("<p>El área del rombo es de: " + (lado_a*lado_b)/2 + "</p>");
        };
        this.pol_reg = function(){
          document.write("<p>El área del polígono regular es de: " + (lado_a*lado_b)/2 + "</p>");
        };
      
    }
    
    let figura1 = new Figura(5, 10);
    let figura2 = new Figura(4, 2);
    
    document.write("<h4> Para la figura 1:</h4>")

    figura1.cuadrado();
    figura1.rectangulo();
    figura1.triangulo();
    figura1.circulo();
    figura1.rombo();
    figura1.pol_reg();

    document.write("<p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>")

    document.write("<h4> Para la figura 2:</h4>")

    figura2.cuadrado();
    figura2.rectangulo();
    figura2.triangulo();
    figura2.circulo();
    figura2.rombo();
    figura2.pol_reg();
 
    // Fin para lista
    document.write("</p></li>")

}