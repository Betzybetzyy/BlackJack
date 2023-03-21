let a = 5;





if ( a >= 10 ) { //undefines, null, una asignacion
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log ('A es menor a 10')
}

// console.log( 'Fin de programa ' );

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, 1: Lunes...

console.log({ dia });

if (  dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
    // if ( dia === 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}


// Sin una If Else o Switch, únicamente objetos 
dia = 3; 

// día de la semana

let diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',];

console.log( diaLetras[dia] || 'Día no definido' );

