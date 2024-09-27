//MÉTODO REDUCE() -- Aplica una función a un acomulador y a cada valor de una array 
// (de izquierda a derecha) para reducirlo a un único valor 
// pasa dos parámetros, un acomulador (a) que acomula todas las iteraciones. (a) en la primera iteración toma el valor del 
// primer elemento del array, o de un valro inicial dado en el reduce()
// el segundo valor (b) representa el valor del array de la iteración actual. 
// En cada iteración, el valor de (a) se actualiza con el resultado de la función de reducción, que toma a y b como parámetros. 
// Después de la última iteración, el método devuelve el valor final acumulado. 

const numberReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = numberReduce.reduce((a, b) => a + b); //estos parámetros (a, b) pueden llevar cualquier nombre (acum , nuevo) x ej
console.log(num); // retorna la suma total del arreglo 55 

