
// MÉTODO FINDINDEX() -- Retorna el primer índice del primer elemento que cumpla 
// la función de prueba proporcionada. De lo contrario devuelve un -1
// Es decir, si el elemento indicado está, saldrá el índice, sino, -1 
const frutas1 = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
const numberFI = frutas1.findIndex(a => a == "pera");
const numberFI2 = frutas1.findIndex(a => a == "1pera");
console.log(numberFI, numberFI2);
