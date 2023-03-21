

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while( i < carros.length ) { // esta condicion debe ser verdadera
//     console.log( carros [i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')

while( carros[i] ) { // codigo simplificado
    if ( i === 1 ) {
        // break;
        i++;
        continue;
    }

    console.log( carros [i] );
    i++;
}




console.warn('Do While')
let j= 0;
do {
    console.log( carros[j]);
    j++;
} while( carros[j] );
