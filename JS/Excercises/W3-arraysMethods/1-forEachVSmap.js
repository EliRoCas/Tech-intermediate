// Ejercicio 11 - FOREACH VS MAP 

//forEach

const array0 = [1, 2, 3, 4, 5]; //Se crea un array, 
array0.forEach(element => { // Se aplica el método forEach a una función arrow, donde a cada elemento del
    console.log(element * 2);  // array lo multiplica por 2 y lo imprime.  
});


//MAP 

const arrayM = [1, 2, 3, 4, 5]; // Se crae un nuevo array
const newArray = arrayM.map(elementM => elementM * 2); // Se crea una constante donde se almacenará
//el arreglo resultante de aplicar la función arrow, es decir, multiplicar cada elemento del array por 2 
console.log(newArray);  // Imprime [2, 4, 6, 8, 10] 