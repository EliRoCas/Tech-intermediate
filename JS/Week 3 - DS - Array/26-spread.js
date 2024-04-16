
// OPERADOR SPREAD -- expande elementos de un iterable como un array o cadena de texto, en contextos 
// donde se espera una lista de argumentos o elementos. Es decir, toma los elementos de un objeto iterable 
// y los separa para que cada uno pueda ser tratado como un elemento individual. 
// se utiliza con puntos suspensivos.

const nuSpr = [1, 2, 3, 4, 5, 6];
const numSpr = [6, 7, 8, 9, 10, 11, 12];
console.log(nuSpr, numSpr);

const array = [...nuSpr, ...numSpr];
console.log(array); // los elementos salen "concatenados"

// Ejemplo 2 

const number = [1, 2, 3, 4, 5, 6];
const numberS = [6, 7, 8, 9, 10, 11, 12];
console.log([0, ...number, "prueba", ...numberS, "hola, mundo", 18, 19, 20])