
// FUNCIÓN PARAMETROS REST - Permite a una función aceptar un número variable de argumentos como un array.
// Para ello utiliza los puntos supensivos, seguido del parámetro REST a usar. 
// ES útil cuando se necesita que una función accepte un número arbitrario de argumentos y los procese como
// un sólo array.  


//1. Primero se declara la función con el parámetro REST. En este caso (...otros)
function sumar(a, b, c, ...otros) {
    let suma = a + b + c;
    // el forEach nos indica que debe hacer un recorrido por cada uno de los elementos que se definan en 
    // el parámetro REST (n). 
    // Se crea una función arrow donde se le indica que en cada iteración de "otros" debe tomar un 
    // elemento (n) y sumarlo a la variable "suma" (suma += n). 
    // Así la función "sumar" regresa el consolidado de los argumentos originales (a,b,c) + el parámetro REST 
    otros.forEach(n => suma += n);
    return suma;
}

console.log(sumar(2, 4, 5, 5));
console.log(sumar(2, 4, 5, 5, 3));
console.log(sumar(2, 4, 5, 5, 3, 4, 5));
console.log(sumar(2, 4, 5, 5, 5, 8, 9));
console.log(sumar(2, 4, 5, 5));

// Ejemplo 2

// En este caso se utiliza un bucle for para iterar sobre cada argumento del array "theArgs"
// en cada iteración, arg es el valor actual de "theArgs", que se va sumando al acomulador "total".
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(5, 3, 6, 4, 8, 10)); 