// MÉTODO SPLICE() -- Cambia el contenido de un array eliminando existentes 
// y/o agregando nuevos elementos - modifica el original. 
//utiliza 3 parámetros (la posición o índice de inicio, cuantos elementos se reemplazan, el valor)

const spliceE = ["nombre", "apellido", "correo", "direccion"];
const spliced = spliceE.splice(1, 1, "profesion"); //Reemplazo 1 elemento, en la posición del índice 1 

console.log(spliced);
console.log(spliceE);

//Ejemplo 2 

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
//No se reemplaza, porque le indicamos 0 
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//Ejemplo 3 

const numsS = [1, 2, 3]
// Elimina 1 elemento a partir del índice 1:
numsS.splice(1, 1) // -> [2]
console.log(numsS) // => [1, 3] ¡🛑 Modificó el original!



//MÉTODO TOSPLICED() -- Al igual que el splice(), cambia el contenido del array
// pero lo hace como copia, dejando el array original. 

const spliceEI = ["nombre", "apellido", "correo", "direccion"];
const splicedI = spliceEI.toSpliced(1, 1, "profesion");

console.log(splicedI);
console.log(spliceEI);

// Ejemplo 2 

const nums = [1, 2, 3];
// elimina 1 elemento a partir del índice 1:
nums.toSpliced(1, 1) // => [1, 3] ¡Nuevo Array!
console.log(nums) // => [1, 2, 3] ¡✅ No modificó el original!
