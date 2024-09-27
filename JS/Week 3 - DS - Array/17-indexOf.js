
//MÉTODO INDEXOF() -- Retorna el primer índice en el que se puede encontrar un elemento dado en el array. 
//Sino retorna un -1 si el elemento no está presente 

const frutas = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
const valueIndex = frutas.indexOf('ajo');
const valueIndex1 = frutas.indexOf('aj'); // como no está en el array, retorna un -1
const valueIndex2 = frutas.indexOf('pera');
const valueIndex3 = frutas.indexOf('123');
const valueIndex4 = frutas.indexOf('a');
console.log(valueIndex, valueIndex1, valueIndex2, valueIndex3, valueIndex4);


