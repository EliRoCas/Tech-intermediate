
//MÉTODO REVERSE() -- Cambia el orden del array, modificando el arreglo original
const fruitZYX = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
console.log(fruitZYX.reverse());
console.log(fruitZYX); // Imprime el nuevo arreglo con lo valores invertidos

//MÉTODO TOREVERSEd() -- Al igual que reverse, invierte los elementos del array, pero crea una 
// copia y mantiene el original.
const fruitABC = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
console.log(fruitABC.toReversed());
console.log(fruitABC);

// Ejemplo 2 

const itemsAB = [1, 2, 3];
const reversedItems = itemsAB.toReversed();
console.log(reversedItems); // [3, 2, 1 ] la copia del original 
console.log(itemsAB); // [1, 2, 3] el original

