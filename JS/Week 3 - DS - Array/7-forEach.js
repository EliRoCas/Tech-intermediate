// FOREACH: ejecuta la función indicada una vez por cada elemento del array 
// Utiliza un callback 
// Ejemplo 1 
// Se va recorriendo el arreglo uno a uno 
fruits.forEach(function (el, index) { // tenemos dos parámetros, el elemento "el" y el índice "index" 
    console.log(`<li id = "${index}">${el}</li>`); // Se le dice que traiga estos parámetros en forma de lista
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


// El forEach se diferencia del MAP, porque el primero se utiliza para realizar una acción específica 
// en cada elemento de un array, pero sin modificar el array original o crear uno nuevo. 
// Por su parte MAP se utiliza para transformar cada elemento de un array en un nuevo valor
// retornando un nuevo array con esos valores transformados. 
