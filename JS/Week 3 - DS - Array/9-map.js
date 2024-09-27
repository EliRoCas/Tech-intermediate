const dev = [
    {
        id: 1,
        name: "Dante",
        lastName: "Arias",
        languages: "php",
    },
    {
        id: 2,
        name: "Triz",
        lastName: "Rocas",
        languages: "Java y C#",
        languages2: ["Java", "C#"],
    },
    {
        id: 3,
        name: "Edwin",
        lastName: "Arias",
        languages: ".net",
    },
    {
        id: 4,
        name: "Eli",
        lastName: "Rocas",
        languages: "php",
    },

]

const developer = [
    {
        id: 1,
        languages: "java y C#",
        programing: "web y escritorio",
    },
    {
        id: 2,
        languages: "PHP y HTML",
        programing: "web y escritorio",
    },
    {
        id: 3,
        languages: "Visual y Python",
        programing: "web y escritorio",
    },
    {
        id: 4,
        languages: "java y C#",
        programing: "web y escritorio",
    },

]


// -----------------------------------------------------------------------------------------//

// MÉTODO MAP () -- Permite recorrer el arreglo y modificar los elementos de él 
// retornando un nuevo array con la misma longitud del original. Crea un nuevo array con los resultados
// de la acción que se le envía. 

// Se crea un constante const structures = dev.map(pro => { ... }):
// que captará el nuevo array.  Además, utiliza el método map en el array dev. Así, map toma una función
// de callback que recibe un elemento (pro) del array dev en cada iteración y devuelve un nuevo valor 
//transformado. 
//El resultado final es un nuevo array structures que contiene los objetos transformados.
const structures = dev.map(pro => {
    return {
        name: pro.name, // Asigna el valor de la propiedad name del objeto pro al nuevo objeto que se está creando.
        lastName: pro.lastName, // Asigna el valor de la propiedad lastName del objeto pro al nuevo objeto que se está creando.
        languages: pro.languages, //  Asigna el valor de la propiedad languages del objeto pro al nuevo objeto que se está creando.
        data: `${pro.name} - ${pro.languages}` // Crea una propiedad data que contiene una cadena de texto formada por el nombre (pro.name) 
        // y los lenguajes de programación (pro.languages) del objeto pro.
    }
});
console.log(structures);

//Ejemplo 2 
let numbers = [10, 20, 30, 70];
let multiplication = 2;
let products = numbers.map(number => number * multiplication);
console.log(products)

//20, 40, 60, 140 

//Ejemplo 3 
let prefix = ["super", "spider", "ant", "iron"];
let sufix = "man";

let fullNames = prefix.map(prefix => prefix + sufix);
console.log(fullNames) // Nos debe retornar ["superman", "spiderman", "antman"]


// Ejemplo 4 

let numbMap = [3.7, 4.9, 6.2];
let round = numbMap.map(function (numero) {
    return Math.round(numero);
})
console.log(round)