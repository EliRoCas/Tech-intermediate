//Ejercicio 14 - isArray VS instanceOF 


//ISARRAY 
// Definición de diferentes objetos
const arr = [1, 2, 3];
const str = "Hola";
const num = 42;

// Verificación de si los objetos son arrays usando Array.isArray()
console.log(Array.isArray(arr)); // true, arr es un array
console.log(Array.isArray(str)); // false, str es una cadena de texto
console.log(Array.isArray(num)); // false, num es un número


//INSTANCEOF 
// Definición de diferentes objetos
class Persona {
    constructor(name) {
        this.name = name;
    }
}

const persona = new Persona("Juan");
const arrI = [1, 2, 3];
const strI = "Hola";

// Verificación de si los objetos son instancias de diferentes constructores usando instanceof
console.log(persona instanceof Persona); // true, persona es una instancia de la clase Persona
console.log(arrI instanceof Array); // true, arr es una instancia de la clase Array
console.log(strI instanceof String); // false, str es una cadena de texto primitiva, no una instancia de la clase String


// Aunque ambos funcionan para verificar, el isARray() determina unicamente si es o no un Array
// por su parte, el instanceOF() puede usarse para verificar si un objeto es una instancia de CUALQUIER 
// función constructor. 
// Además, instanceOf() no funciona con objetos primitivos (cadenas de texto o números, etc)
// mientras que isArray si puede verificar si un objeto primitivo es un array 

