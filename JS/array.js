// PUSH -- Agrega elementos a mi arreglo al final de mi array 
let list = ["Manzana", "Uva", "Fresa", 12, 25, "Hola, Mundo"];
list.push("ultimo");
console.log(list);
console.log(list[2]);

// traer n elementos del arreglo usando un bucle 
for (let i = 4; i <= 6; i++) {
    console.log(list[i]); // con esto se accede sólo a los elementos 4, 5, 6
};

// Slice -- Extrae una parte de un array y regresa uno nuevo con dichos elementos. Toma dos parámetros opcionales: 
// el índice inicial y el índice de finalización  (este no se incluye en el array)
let copy = list.slice(0, 4);
console.log(copy);
console.log(list);

//-----------------------------------------------------------------------------//
//POP elimina la última posición 
list.pop();
console.log(list);

// ----------------------------------------------------------------------------//

// Nos traer la palabra hola
const test = [1, 2, "true", "bienvenido", ["F", "Y", 8, [3, 4, "hola", "María"]]];
//console.log(test[4][3][2]);

//Trae la F
//console.log(test[4][0]);

//Trae a María
console.log(test[4][3][3]);

//ARRAY.OF -- Permite llenar elementos - Es decir, crear un arreglo sin usar corchetes 
const array = Array.of("x", "y", "hola", "Dario", 8, 9, 0);
console.log(array);

//-----------------------------------------------------------------------------------------------//

//FILL -- cambia los elementos de un array, por una valor estático 
//Ejemplo 1  
const value = Array(200).fill(0);
console.log(value);

//Ejemplo 2 
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1.fill(0, 2, 7)); // Expected output: Array [1,2,0,0] -- 
// El primer argumento (0) es el valor que se cambiará, el segundo es la posición en la que inicia el cambio
// el tercero es el índice de finalización del cambio (no se incluye en el array resultante) 
console.log(array1.fill(5, 4)); // Expected output: Array [1,5,5,5]
console.log(array1.fill(6));  // Expected output: Array [6,6,6,6]

//-----------------------------------------------------------------------------------------------//

// ARREY por posiciones 
const fruits = ["lulo", "fresa", "manzana", "papaya"];
let firstE = fruits[0];
console.log(firstE);

//-------------------------------------------------------------------------------------//

// FOREACH: ejecuta la función indicada una vez por cada elemento del array 
// Ejemplo 1 
fruits.forEach(function (el, index) {
    console.log(`<li id = "${index}">${el}</li>`);
})

// Ejemplo 2 

const nTest = [10, 20, 30, 40, 50, 60];
nTest.forEach(function (element) {
    console.log(element);
})

//Ejemplo 3 
const fruits2 = ["lulo", "fresa", "manzana", "papaya", "melocotón", "mora", "piña", "mango"];
fruits2.forEach(e =>
    console.log(e));


// ----------------------------------------------------------------------------------------------//


// FILTER -- Se utiliza para crear un nuevo array con todos los elementos que cumplan una condición 
// especificada por una función de filtrado. Los elementos que devuelven "true", se incluirán. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 35, 36, 37, 38, 39, 50, 51, 52, 53, 54, 55];
const resp = numbers.filter(calculateN);

function calculateN(result) {
    return result % 2 == 0;
}

console.log(resp);

//Ejemplo 2 
const fruits3 = ["manzana", "pera", "ajo", "piña", "melocotón", 123, 989565, "uva"];
const res = fruits3.filter(valor => valor.length > 4); // el length trae los elementos que tengan 4 caracteres
console.log(res);


