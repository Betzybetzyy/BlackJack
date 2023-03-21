const regresaTrue = () => {
    console.log('RegresaTrue');
    return true; 
}

const regresaFalse = () => {
    console.log('RegresaFalse');
    return false; 
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); //true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log('======');
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false ); //false


console.warn('OR'); // true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() ); // true

console.log( '4 condiciones', true || true || true || false ); //true

console.warn('Asignaciones');

const soyUndefined = undefined; 
const soyNull = null; 
const soyFalso = false; 

const a1 = true && 'Hola Mundo' && 150; //?
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5= soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;

console.log( {a1, a2, a3, a4, a5, });

if ( regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hace algo');
} else {
    console.log('Hacer otra cosa');
}
