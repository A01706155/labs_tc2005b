ej1()
ej2()
ej5()

function ej1 (){
    
    // Pedir número al usuario
    let n = prompt("Ingresa un número:");
    
    // Comenzar a hacer la estructura de la tabla
    document.write("<table> <tr> <td>Numero</td> <td> ² </td> <td> ³ </td>");
    
    // Ciclo para generar la tabla
    for (let i = 0; i <= n; i++){
        let cuadr = Math.pow(i, 2); let cubo = Math.pow(i,3);
        document.write("<table> <tr> ","<td>",i,"</td> <td>", cuadr ,"</td> <td>", cubo ," </td> </tr></table>");
    }

}

function ej2(){
    // Generar suma y resultado en memoria
    let random1 = Math.floor(Math.random() * 15);
    let random2 = Math.floor(Math.random() * 15);
    let sum = random1 + random2;

    // Contar el tiempo y obtener respuesta
    let t1 = new Date().getTime();
    const result = prompt("Cual es la suma de: " + random1 + "+" + random2);
    let t2 = new Date().getTime();
    let tiempo = (t2-t1)/1000;

    // Comprobar si la respuesta es correcta y regresar el tiempo
    if (result == sum){
        alert("¡Muy bien!, te tardaste " + tiempo + " segundos");
    }
    else{
        alert("¡Así no!, el resultado era " + sum);
    }
}

function ej5(){
    
    // Preguntar por el número
    let num = prompt("Bienvenido al mundo de los espejos, dame un número:");
    let num_inv = "";

    // Invertir
    for (let i = num.length - 1; i >= 0; i--){
        numero_inv += num[i];
    }

    // Devolver valor
    alert("El espejo dice que tu número es " + num);
}