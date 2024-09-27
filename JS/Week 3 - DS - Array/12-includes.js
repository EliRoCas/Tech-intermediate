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

//MÉTODO INCLUDES -- valida si Un elemento existe dentro de una variable y regresa un booleano 
const arreg = [35, 28, 31, 25, 29];
console.log(arreg.includes(35));
console.log(arreg.includes(20));

// Ejemplo 1.1 
const arg = [35, 28, 31, 25, 29];
console.log(arg.includes(35)); //true 
console.log(arg.includes(12)); // false 


// Ejemplo 2 --Método some() con Método includes()
const incluD = dev.some(posta => posta.languages("Java y C#"));
console.log(incluD);


// Ejemplo 3 - Usando FILTER con INCLUDES 
const employees = [
    {
        name: "Dario Gomez ",
        salary: 1300000,
        aux: 200000,
        soft: "web",
    },
    {
        name: "Silvia Gomez",
        salary: 2300000,
        aux: 500000,
        soft: "web",
    },
    {
        name: "Rogelio Gomez",
        salary: 3300000,
        aux: 200000,
        soft: "web",
    },
    {
        name: "Tania Beltran",
        salary: 4300000,
        aux: 500000,
        soft: "web",
    },
    {
        name: "Julio Aristizabal",
        salary: 1500000,
        aux: 200000,
        soft: "web",
    },
    {
        name: "Luisa Martinez",
        salary: 5200000,
        aux: 200000,
        soft: "web",
    },
]

let testFilter = employees.filter(post => post.name.includes('Luisa Martinez'));
console.log(testFilter);
