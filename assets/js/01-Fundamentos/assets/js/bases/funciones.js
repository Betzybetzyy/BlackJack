
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1,2];

    //Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return') ;
}

const saludar2 = function( nombre ) {
console.log('Hola ' + nombre) ;
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}


const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Betzabet', 40 , true  , 'Costa Rica');


// saludar2('Betzabet');

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar( a, b ){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

// console.log( sumar2 (2,2) );

function getAleatorio() {
    return Math.random();
}

//En una funcion de flecha, que no tenga llaves {}
// getAleatorio2()


const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );




