// FILTER -- crea un nuevo array que contiene sólo los elementos del array original que cumplan con 
// una condición especificada en la función de filtro. 

const fruTasX = ["mango", "manzana", "pera", "piña", "fresa", "papaya", "naranja", "uva"];
const resultX = fruTasX.filter(value => value.length < 7); // en este caso la condición es que los 
//caractéres deben tener una longitud menor a 7
console.log(resultX);

// PUSH -- Agrega elementos a mi arreglo al final de mi array 
let list = ["Manzana", "Uva", "Fresa", 12, 25, "Hola, Mundo"];
list.push("ultimo");
console.log(list);
console.log(list[2]);

// traer n elementos del arreglo usando un bucle 
for (let i = 4; i <= 6; i++) {
    console.log(list[i]); // con esto se accede sólo a los elementos 4, 5, 6
};

// Slice -- Extrae una parte de un array y regresa uno nuevo con dichos elementos. Toma dos parámetros opcionales: 
// el índice inicial y el índice de finalización  (este no se incluye en el array)
let copy = list.slice(0, 4);
console.log(copy);
console.log(list);

//-----------------------------------------------------------------------------//
//POP elimina la última posición 
list.pop();
console.log(list);

// ----------------------------------------------------------------------------//

// Nos traer la palabra hola
const test = [1, 2, "true", "bienvenido", ["F", "Y", 8, [3, 4, "hola", "María"]]];
//console.log(test[4][3][2]);

//Trae la F
//console.log(test[4][0]);

//Trae a María
console.log(test[4][3][3]);

//ARRAY.OF -- Permite llenar elementos - Es decir, crear un arreglo sin usar corchetes 
const array = Array.of("x", "y", "hola", "Dario", 8, 9, 0);
console.log(array);

//-----------------------------------------------------------------------------------------------//

//FILL -- cambia los elementos de un array, por una valor estático 
//Ejemplo 1  
const value = Array(200).fill(0);
console.log(value);

//Ejemplo 2 
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1.fill(0, 2, 7)); // Expected output: Array [1,2,0,0] -- 
// El primer argumento (0) es el valor que se cambiará, el segundo es la posición en la que inicia el cambio
// el tercero es el índice de finalización del cambio (no se incluye en el array resultante) 
console.log(array1.fill(5, 4)); // Expected output: Array [1,5,5,5]
console.log(array1.fill(6));  // Expected output: Array [6,6,6,6]

//-----------------------------------------------------------------------------------------------//

// ARRAY por posiciones 
const fruits = ["lulo", "fresa", "manzana", "papaya"];
let firstE = fruits[0];
console.log(firstE);

//-------------------------------------------------------------------------------------//

// FOREACH: ejecuta la función indicada una vez por cada elemento del array 
// Ejemplo 1 
fruits.forEach(function (el, index) {
    console.log(`<li id = "${index}">${el}</li>`);
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


// ----------------------------------------------------------------------------------------------//


// FILTER -- Se utiliza para crear un nuevo array con todos los elementos que cumplan una condición 
// especificada por una función de filtrado. Los elementos que devuelven "true", se incluirán. 

const numbersXD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 35, 36, 37, 38, 39, 50, 51, 52, 53, 54, 55];
const respO = numbersXD.filter(calculateN);

function calculateN(result) {
    return result % 2 == 0;
}
console.log(respO);

//Ejemplo 2 
const fruits3 = ["manzana", "pera", "ajo", "piña", "melocotón", 123, 989565, "uva"];
const resPO = fruits3.filter(valor => valor.length > 4); // el length trae los elementos que tengan 4 caracteres
console.log(resPO);


//-----------------------------------------------------------------------------------------------------//

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

//Ejemplo 3 



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


//Ejemplo 3 
console.log([80, 9, 100].sort()); //No ordena "propiamente dicho, los valores"
console.log([80, 9, 100].sort((a, b) => a - b));

const n = [80, 90, 2, 6, 89];
n.sort();
console.log(n)


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

//FUNCIÓN COMPARE 

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



// ----------------------------------------------------------------------------------------------//

//MÉTODO SOME () -- nos regresa un booleano, es decir, permite comprobar. 
const songg = dev.some(post => post.id == 5);
console.log(songg);



//-----------------------------------------------------------------------------------------------//

//MÉTODO INCLUDES -- valida si Un elemento existe dentro de una variable
const arreg = [35, 28, 31, 25, 29];
console.log(arreg.includes(35));
console.log(arreg.includes(20));


// Ejemplo 2 --Método some() con Método includes()
const incluD = dev.some(posta => posta.languages.includes("Java y C#"));
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

// MÉTODO EVERY  -- Itera un array y retorna un booleano, pero  permite saber si la palabra,  
//  por ejemplo "recat" se incluye en todos los objetos o no. 

const vali = employees.every(post => post.soft.includes('web')); // con el include valida y responde "si/no"
console.log(vali);

// Ejemplo 2 
const arrayEvery = [35, 28, 31, 25, 29];
const testEvery = (element) => element > 20;
let resEvery = arrayEvery.every(testEvery);
console.log(resEvery) //true 

//Otra forma 
const testEveryII = (arrayEvery.every(elemt => elemt < 20));
console.log(testEveryII) //false


//---------------------------------------------------------------------------------------------------------------------------//

// MÉTODO CONCAT -- permite unir arreglos 
const ejem1 = ["a", "maria", "julian"];
const ejem2 = ["b", "Dani", "ivan"];

const union = ejem1.concat(ejem2);
console.log(union);



// --------------------------------------------------------------------------------------------------------//

// MÉTODO JOIN()  -- sirve como método de separación
const alf = ["a", "b", "c", "d", "e", "f"];
console.log(alf);
console.log(alf.join(' '));
console.log(alf.join('-'));
console.log(alf.join(','));


// --------------------------------------------------------------------------------------------------------------------//

//MÉTODO REDUCE() -- Aplica una función a un acomulador y a cada valor de una array 
// (de izquierda a derecha) para reducirlo a un único valor 
// pasa dos parámetros 

const numberReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = numberReduce.reduce((a, b) => a + b); //estos parámetros (a, b) pueden llevar cualquier nombre (acum , nuevo) x ej
console.log(num);


// ----------------------------------------------------------------------------------------------------------------------// 

//MÉTODO INDEXOF() -- Retorna el primer índice en el que se puede encontrar un elemento dado en el array. 
//Sino retorna un -1

const frutas = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
const valueIndex = frutas.indexOf('ajo');
const valueIndex1 = frutas.indexOf('aj'); // como no está en el array, retorna un -1
const valueIndex2 = frutas.indexOf('pera');
const valueIndex3 = frutas.indexOf('123');
const valueIndex4 = frutas.indexOf('a');
console.log(valueIndex, valueIndex1, valueIndex2, valueIndex3, valueIndex4);



//--------------------------------------------------------------------------------------------------------------------------//

// MÉTODO FINDINDEX() -- Retorna el primer índice del primer elemento que cumpla 
// la función de prueba proporcionada. De lo contrario devuelve un -1
// Es decir, si el elemento indicado está, saldrá el índice, sino, -1 
const frutas1 = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
const numberFI = frutas1.findIndex(a => a == "pera");
const numberFI2 = frutas1.findIndex(a => a == "1pera");
console.log(numberFI, numberFI2);



// -----------------------------------------------------------------------------------------------------------------------// 

// MÉTODO SHIFT() -- permite eliminar el primer elemento de un arreglo, modificando su extensión 
const fru = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
fru.shift();
console.log(fru);


// -----------------------------------------------------------------------------------------------------------------------// 

// MÉTODO UNSHIFT() -- Inserta un elemento al inicio de mi arreglo, modifica su extensión
const frut = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
console.log(frut.unshift("programación"))
console.log(frut)


//------------------------------------------------------------------------------------------------------------------//

//MÉTODO REVERSE() -- Cambia el orden del array, modificando el arreglo original
const fruitZYX = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
console.log(fruitZYX.reverse());
console.log(fruitZYX)

//MÉTODO TOREVERSEd() -- Al igual que reverse, invierte los elementos del array, pero crea una 
// copia y mantiene el original.
const fruitABC = ["manzana", "pera", "ajo", "piña", "melocotón", "123", "989565", "uva"];
console.log(fruitABC.toReversed());
console.log(fruitABC);

// Ejemplo 2 

const itemsAB = [1, 2, 3];
const reversedItems = itemsAB.toReversed();
console.log(reversedItems); // [3, 2, 1 ] la copia del original 
console.log(itemsAB); // [1, 2, 3] el original



// ---------------------------------------------------------------------------------------------------------------// 

// MÉTODO SPLICE() -- Cambia el contenido de un array eliminando existentes 
// y/o agregando nuevos elementos - modifica el original. 
//utiliza 3 parámetros (la posición o índice de inicio, cuantos elementos se reemplazan, el valor)

const spliceE = ["nombre", "apellido", "correo", "direccion"];
const spliced = spliceE.splice(1, 1, "profesion");

console.log(spliced);
console.log(spliceE);

//Ejemplo 2 

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//Ejemplo 3 

const numsS = [1, 2, 3]
// Elimina 1 elemento a partir del índice 1:
numsS.splice(1, 1) // -> [2]
console.log(numsS) // => [1, 3] ¡🛑 Modificó el original!



//MÉTODO TOSPLICED() -- Al igual que el splice(), cambia el contenido del array
// pero lo hace como copia, dejando el array original. 

const spliceEI = ["nombre", "apellido", "correo", "direccion"];
const splicedI = spliceEI.toSpliced(1, 1, "profesion");

console.log(splicedI);
console.log(spliceEI);

// Ejemplo 2 

const nums = [1, 2, 3];
// elimina 1 elemento a partir del índice 1:
nums.toSpliced(1, 1) // => [1, 3] ¡Nuevo Array!
console.log(nums) // => [1, 2, 3] ¡✅ No modificó el original!


//MÉTODOS FLAT -- Crea un matriz de 

const numFlat = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10, [11, 12, 13, 14, 15, [16, 17, 18, 19, 20]]]];
console.log(numFlat.flat());
const numFlatI = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]];
console.log(numFlatI.flat());

//Ejemplo II 
var arr = [1, 2, [3, 4]];
arr.flat();
console.log(arr);

var arrI = [1, 2, [3, 4, [5, 6]]];
arr.flat();
console.log(arrI);

var arrII = [1, 2, [3, 4, [5, 6]]];
arr.flat(2);
console.log(arrII);


// MÉTODO ISARRAY() VS INSTANCEOF





//MÉTODO FROM()



// FUNCION PARAMETROS REST
function sumar(a, b, c, ...otros) {
    let suma = a + b + c;
    otros.forEach(n => suma += n);
    return suma;
}

console.log(sumar(2, 4, 5, 5));
console.log(sumar(2, 4, 5, 5, 3));
console.log(sumar(2, 4, 5, 5, 3, 4, 5));
console.log(sumar(2, 4, 5, 5, 5, 8, 9));
console.log(sumar(2, 4, 5, 5));


// OPERADOR SPREAD --concatenar arrays
const nuSpr = [1, 2, 3, 4, 5, 6];
const numSpr = [6, 7, 8, 9, 10, 11, 12];
console.log(nuSpr, numSpr);


