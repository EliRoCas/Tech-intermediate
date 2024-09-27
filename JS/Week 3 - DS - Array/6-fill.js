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
