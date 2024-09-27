// MÉTODOS PARA MANIPULAR ARRAYS 

// Nos traer la palabra hola
const test = [1, 2, "true", "bienvenido", ["F", "Y", 8, [3, 4, "hola", "María"]]];
//console.log(test[4][3][2]);

//Trae la F
//console.log(test[4][0]);

//Trae a María
console.log(test[4][3][3]);


//-----------------------------------------------------------------------------------------------//

// ARRAY por posiciones 
const fruits = ["lulo", "fresa", "manzana", "papaya"];
let firstE = fruits[0]; // El [0] indica que se llamará al primer índice del array 
console.log(firstE);

const f = fruits[fruits.length - 1]; // al agregarle .length -1 nos trae el último elemento del array "papaya"
console.log(f);

// ----------------------------------------------------------------------------------------------------//

//ARRAY CON OBJETOS 

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


