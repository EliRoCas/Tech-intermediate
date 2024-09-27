
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

// METODO SORT() Ordena los elementos del array y retrona el arreglo ordenado en orden ascendente (A a Z)
// por defecto

const arraySort = [5, 6, 77, 8, 55, 59, 120, 98, 2, 5, 22, 35, 50];
const order = arraySort.sort((a, b) => a - b);
console.log(order);
console.log(arraySort);

// El método sort() tiene como particularidad que, una vez modificado el arreglo, este supedita al anterior
// es decir, que me modifica el arreglo principal y lo 'guarda'


//Ejemplo 2 
const sortI = ["padre", "madre", "Madre", "Padre", 1, 9, 2, "hijo", "Hijo"];
sortI.sort();
console.log(sortI);


//Ejemplo 3 
console.log([80, 9, 100].sort()); // Se aplica el método, pero como hay un paréntesis antes del array lo vuelve string 
console.log([80, 9, 100].sort((a, b) => a - b)); // Acá se agrega una función de comparación
// Esto es lo mismo que esto: 
//FUNCIÓN COMPARE 

// function Compare(a, b) {

//     if (a < b) {
//         return - 1
//     }
//     if (a > b) {
//         return 1
//     }
//     // si a = b 
//     return 0
// }
// console.log(Compare(4, 6));


const nSort = [80, 90, 2, 6, 100]; // Acá al existir un arreglo, sí lo ordena.
nSort.sort();
console.log(nSort);


// Ejemplo 4 

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 42 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    //si son iguales
    return 0;
});

console.log(items);

items.sort(function (a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    //si son iguales
    return 0;
});

console.log(items);


// Ejemplo 5 - Sort con Map 

const listM = ["Delta", "alpha", "Charlie", "bravo"];

// array temporal, que contine objetos con posicion y valor de ordenamiento 
// Usamos el método map, para aplicar la funcion toLowerCase a cada elemento del array original y 
//captarlo en una nueva constante "mapped"
const mapped = listM.map(function (el, i) {
    return { index: i, value: el.toLowerCase() };
});

// Ordenamos el array mapeado que contiene los valores reducidos 
// Ya con la función aplicada y el nuevo array resultante, le aplicamos el método sort para ordenar. 
// Para ello usamos una función de comparación. 
mapped.sort(function (a, b) {
    if (a.value > b.value) {
        return 1;
    } if (a.value < b.value) {
        return -1;
    }
    return 0;
});

// contenedor para el orden resultante
// Se usa el método map para crear una nueva copia del array "mapped", que ya ha sido iterado con el 
// método sort. Y se le indica que tome los elementos index (indice original del array ListM) y 
//value (valor del elemento convertido con el toLowerCase), en cada iteracón para acceder a ese elemento 
// original, tomarlo y ordenarlo con base a la función mappeada. 
// Así, se crea un nuevo array "resultMS" que contine los elementos originales de ListM, pero en la 
// ubicación del array mapped 
const resultMS = mapped.map(function (el) {
    return listM[el.index];
});

console.log(resultMS)


//------------------------------------------------------------------------------------------------------//
//MÉTODO toSorted - A diferencia del Sort(), modifica el arreglo, pero no cambia el arreglo original
//Es decir, no lo reemplaza  

const arraySort1 = [5, 12, 25, 2, 59, 64, 28, 3, 15, 354];
const order1 = arraySort1.toSorted((a, b) => a - b);
console.log(order1);
console.log(arraySort1);


// El mismo ejemplo de string y enteros pero con este método, exige almacenar el método en una variable 
//porque no reemplaza al original
const sortII = ["padre", "madre", "Madre", "Padre", 1, 9, 2, "hijo", "Hijo"];
const resp = sortII.toSorted();
console.log(resp);
console.log(sortII);
