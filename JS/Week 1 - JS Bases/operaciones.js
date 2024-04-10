import {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo,
    exponente
} from './funcionesR.js'

import Expo from './funcionesR.js' // cuando se llama una "export default" será necesario cambiarle el nombre 
// al momento de llamarlo, ponerle un "alias", que en este caso es Expo. 

console.log(`La suma de los dos numeros es: ${sumar(10, 5)}`);
console.log(`La resta de los dos numeros es: ${restar(10, 5)}`);
console.log(`La multiplicacion de los dos numeros es: ${multiplicar(10, 5)}`);
console.log(`La division de los dos numeros es: ${dividir(10, 5)}`);
console.log(`El modulo de los dos numeros es: ${modulo(10, 5)}`);
console.log(`El exponente de los dos numeros es: ${Expo(10, 5)}`);