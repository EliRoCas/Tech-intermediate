
//MÉTODOS FLAT -- Crea un nuevo array con todos los elementos de sub-array, concatenados 
// recursivamente hasta la profundidad especificada.
// Se usa para "aplanar un array", es decir, para convertir un array, que contiene arrays anidados
// en un solo array con todos los elementos en un solo nivel. 
// Puede aceptar 1 parámetro: "depth" que indica el nivel de profundidad de este proceso. 
// Por defecto es 1, lo que indica que se aplanará el array a un sólo nivel de anidamiento.
// Esto significa que sólo tomará el primer arreglo anidado, si hay más anidaciones, las ignorará.

const numFlat = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10, [11, 12, 13, 14, 15, [16, 17, 18, 19, 20]]]];
console.log(numFlat.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12, 13, 14, 15, [16, 17, 18, 19, 20]]]

const numFlatI = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]];
console.log(numFlatI.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Ejemplo II 
var arr = [1, 2, [3, 4]];
arr.flat(); // hay sólo un nivel de anidamiento, se puede dejar con el valor por defecto  
console.log(arr); // [1, 2, 3, 4]

var arrI = [1, 2, [3, 4, [5, 6]]];
arr.flat(); // no se especifica valor, sólo aplanará el primer nivel, no profundizara 
console.log(arrI); // [1, 2, 3, 4, [5, 6]]

var arrII = [1, 2, [3, 4, [5, 6]]];
arr.flat(2); // se especifica que hay dos niveles de anidamiento o de profundidad, toma los dos arrays anidados
console.log(arrII); // [1, 2, 3, 4, 5, 6]

