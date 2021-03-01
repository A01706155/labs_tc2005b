console.log("hola")

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    response.setHeader('Content-Type', 'text/html');
    response.write("Hola desde el servidor");
    response.end();
});

server.listen(3000);

// Aquí comienzan los problemas:

// Para recibir datos del usuario,
// Guía: https://www.codecademy.com/articles/getting-user-input-in-node-js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Para el sistema de archivos
const fs = require('fs');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function problema1() {

    readline.question('¿Cuántos números quieres que tenga el arreglo?\n', cant => {

        let arr = [];
        for(let i=0; i<cant; i++){
            let rnd =  Math.floor(Math.random()*100);
            arr.push(rnd);
        }
    
        let avg = 0;
        for(let i = 0; i<arr.length; i++){       
            avg += arr[i];
        }
    
        console.log(avg);

        readline.close();
    });
}

function problema2(){

    readline.question('Escribe algo aquí para guardarlo en un txt:\n', contenido => {
        
        fs.writeFileSync('new.txt', contenido)
        console.log("Congrats!")
        
        readline.close();
    });

}

function problema3(){

    readline.question('Dame un número y te daré el resultado del factorial:\n', fact => {
        
        let acm = 1;
        for (i=1; i<=fact; i++) {
            acm = acm * i; 
        }
        console.log(acm);
        
        readline.close();
    });
}

problema1();
//problema2();
//problema3();