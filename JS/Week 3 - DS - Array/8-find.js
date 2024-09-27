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

// FIND() -- Recorre el arreglo y retorna la primera coincidencia que se busca 

// Ejemplo por propiedad 
const res = developer.find(post => post.languages == "PHP y HTML");
console.log(res);

// Ejemplo por ID
const rest = developer.find(post => post.id == 3);
console.log(rest);

// Ejemplo para usar FIND para búsquedas específicas 
const arrayFind = [5, 12, 8, 130, 44, 78, 98, 120];
const numberFind = arrayFind.find(a => {
    console.log("n", a);
    return a === 98; // Va a devolver el valor que sea igual a 98 en el array
})

console.log(numberFind);

// Es útil cuando se necesita encontrar una coincidencia específica. Mientras que el 
// .filter recorre el arreglo uno a uno buscando todo lo que cumpla la condición, el find 
// sólo busca la coincidencia precisa. Esto se traduce en menor tiempo de ejecución. 
