const dev = [
    {
        name: "Dante",
        lastName: "Arias",
        languages: "php",
    },
    {
        name: "Triz",
        lastName: "Rocas",
        languages: "Java y C#",
    },
    {
        name: "Edwin",
        lastName: "Arias",
        languages: ".net",
    },
    {
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

// Ejemplo para usar FIND para búsquedas específicas (8:22 REVISAR )
const arrayFind = [5]


// -----------------------------------------------------------------------------------------//

// MÉTODO MAP () -- Permite recorrer el arreglo y modificar los elementos de él 
// retornando un nuevo array con la misma longitud del original

const structures = dev.map(pro => {
    return {
        name: pro.name,
        lastName: pro.lastName,
        languages: pro.languages,
        data: `${pro.name} - ${pro.languages}`
    }
});
console.log(structures);

//Ejemplo 2 
let numbers = [10, 20, 30, 70];
let multiplication = 2;
let products = numbers.map(number => number * multiplication);
console.log(products)

//20, 40, 60, 140 



// -----------------------------------------------------------------------------------------//
// METODO SORT() Ordena los elementos del array y retrona el arreglo ordenado en orden ascendente (A a Z) por defecto

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



// -----------------------------------------------------------------------------------------------------//

//Function Compare 

function Compare(a, b) {

    if (a < b) {
        return - 1
    }
    if (a > b) {
        return 1
    }
    // si a = b 
    return 0
}
console.log(Compare(4, 6));

