
// Las funciones son conjuntos de instrucciones, que realizan una tarea o calculan un valor. Consta de: 
// la definición o declaración de la funcion (palabra reservada "function" seguida de el nombre, 
// los parámetros o argumentos de la función que irán entre paréntesis y sepeparados por comas; 
// las instrucciones {} )
// pueden existir casos de funciones vacías o sin parámetros 

// FUNCIÓN PRIMER CASO -- defino parámetros - Es la más recomendada, porque los datos no son fijos ni "quemados"
function suma(a, b) {
    let sumar = a + b;
    return sumar;
}

console.log(suma(5, 6)); //llamado de la función

// FUNCIÓN SEGUNDO CASO -- En este caso la función es vacía, pero CON variables definidas, datos "quemados"
function sumar() {
    let a = 89;
    let b = 25;
    return a + b;
}
console.log(sumar()) // llamado de la función

// FUNCIÓN TERCER CASO -- vacía y sin variables, pero con impresión interna
function sumar1() {
    console.log(123 + 97);
    console.log(123 / 97);
}
sumar1(); //llamado de la función 

// FUNCIÓN ANÓNIMA - no tiene nombre específico, por lo que no puede ser llamada directamente por su nombre. 
// Por ello, usualmente se define en el momento en que se necesita y se asigna a una variable 
// o se pasa como argumento a otra función.
const sumas = function (numb1, numb2) {
    return numb1 + numb2;
}
console.log(sumas(8, 5))


// Ejemplo 2 - Función anónima con un parámetro definido 
let sumando = function (x, y = 8) {
    return x + y;
}
console.log(sumando(7)); // en este caso, la suma funciona, porque el valor que se agrega va a la posición 0
console.log(sumando(237)); // es decir, a "x"

let sumando2 = function (x = 8, y) {
    return x + y;
}
console.log(sumando(undefined, 4)); // en este ejemplo, por su parte, es necesario poner el dato primitivo 
console.log(sumando(undefined, 89)); // undefined en el espacio del dato que ya cuenta con el valor (x)
// para que el sistema realice la suma. 




// FUNCIÓN ARROW - Es una función dinámica, muy utilizada. Puede tener parámetros o estar vacía
const myFunction = (param1, param2) => {
    // Cuerpo de la función
    return param1 + param2;
};

// const myFunction: Se asigna la arrow function a una variable llamada myFunction.
//(param1, param2): La lista de parámetros de la función. Puede estar vacía o contener uno o 
// más parámetros. Los paréntesis son opcionales si solo hay un parámetro.
//=>: La sintaxis de la flecha indica que estamos definiendo una arrow function.
//{}: El cuerpo de la función, que contiene el código que se ejecutará cuando se llame a la función.
// return param1 + param2;: Una expresión que devuelve el resultado de la función.
// En este caso, la función suma los dos parámetros y devuelve el resultado.

// Ejemplo 2
let result = (a, b) => a + b;
console.log(result(12, 12));

// Ejemplo 3 
const value = () => {
    let a = 15;
    let b = 17;
    return a * b;
}
console.log(value());

//Ejemplo 4 -- Dado que se imprime un mensaje, usamos las `` comillas invertidad
let mensaje = () => `Hola mundo`;
console.log(mensaje)


// Ejemplo 5. Hacer una función que calcule la suma de los números de un arreglo 
function sumArr() {
    let num = [2, 8, 21, 4, 36, 45, 6];
    let sum = 0; // se utiliza para almacenar la suma en cada iteración 
    for (i = 0; i < num.length; i++) { // num.length indica que i aumentará siempre que sea menor a la longitud del arreglo 
        sum = sum + num[i]; // este num[i], indica que el número a sumar, será el de la posición de la iteración en la que esté i 
        // sum+= num[i] esta es otra forma
    }
    console.log(`La suma de mi arreglo es: ${sum}`);
}
sumArr

// Ejemplo 6 
function recorrer() {
    let arreglos = ['Hola, mundo', 'web', 'php', 'visual', '.net'];
    for (let i = 0; i < arreglos.length; i++) {
        console.log(arreglos[i]);
    }
}
recorrer();

// FOR EACH -- Recorre los elementos de un arreglo 

const array = [10, 12, 13, 14, 'web', 'php', 'visual', '.net'];
array.forEach(function (elementos) {
    console.log(elementos);
})

// For each con function arrow 

const fruits = ["mango", "manzana", "pera", "piña", "fresa", "papaya"];
fruits.forEach(elements =>
    console.log(elements));


// ---------------------------------------------------------------------------------------------// 
// FUNCIONES CALLBACK -- son funciones que se pasan como un argumento en otras funciones, y se 
// ejecutan después de que se complete alguna operación.

// MÉTODO FILTER 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definimos una función de callback que verifica si un número es par
const isEven = num => num % 2 === 0;

// Usamos filter() con la función de callback para filtrar los números pares
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Ejemplo 2 -- Calcular los números impares 

const numbersFil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40];
const respFil = numbersFil.filter(calcularN);

function calcularN(result) {
    return result % 2 == 1;
}
console.log(respFil)


// -------------------------------------------------------------------------------------------// 

// Hacer un ejercicio que me muestre los empleados por salarios según la condición 
const employees = [
    {
        nameE: "Dante",
        rol: "Administrador de empresas",
        salary: 3200000,
    },
    {
        nameE: "Triz",
        rol: "Gerente de marketing",
        salary: 4300000,
    },
    {
        nameE: "Max",
        rol: "Asesor comercial",
        salary: 2500000,
    },
    {
        nameE: "Zeus",
        rol: "Técnico de infraestructura",
        salary: 1800000,
    },

    {
        nameE: "Edwin",
        rol: "Lider de Arquitectura",
        salary: 7000000,
    },
    {
        nameE: "Eli",
        rol: "Desarrollador",
        salary: 3500000,
    }
];

// console.log(employees);

const calcularEm = employees.filter(value => value.salary <= 2500000);

console.log(calcularEm);



