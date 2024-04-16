// MÉTODO ISARRAY() -- Determina si el valor pasado es un Array 
Array.isArray([]);  //true
Array.isArray([1]); //true
Array.isArray([new Array()]);//true 
Array.isArray([new Array([1,2,3])]); //false
Array.isArray([new Array (3)]); //false
// Array.prototype también es un array 
Array.isArray([Array.prototype]); 
