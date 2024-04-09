//Ejercicio 1 - Función anónima 
const resta = function (a, b) {
    return a - b;
};
console.log(resta(3, 2)); // Imprimirá 1

//------------------------------------------------------------------------------------------------// 

// Ejercicio 2 - FOR EACH 
// Definimos un array de números
const numbers = [1, 2, 3, 4, 5];

// Usamos forEach para recorrer cada elemento del array
numbers.forEach(function (number) {
    console.log(number);
});

// ------------------------------------------------------------------------------------------------// 

// Ejercicio 3 - FILTER 
const people = [
    { name: 'Dante', age: 3 },
    { name: 'Triz', age: 2 },
    { name: 'Edwin', age: 35 },
    { name: 'Eli', age: 30 },
    { name: 'Max', age: 1 }
];

// Filtrar las personas mayores de 29
const filteredPeople = people.filter(function (person) { // en esta constante se da la condición para el filter
    return person.age > 29;
});

console.log(filteredPeople);


// Ejercicio 4 - Sumar los salarios de las personas que ganan más de 2500000, usando filter y reduce 

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

// Filtrar empleados con salario mayor a 2500000
const highSalaryEmployees = employees.filter(employee => employee.salary > 2500000);

// Sumar los salarios de los empleados filtrados
const totalSalary = highSalaryEmployees.reduce((sum, employee) => sum + employee.salary, 0);
// Aquí el reduce nos permite sumar los valroes. Sus parámetros:
// "sum" funciona como acumulador, 
// employee es el objeto actual en el que va la iteración 
// employee.salary es el salario del empleado actual
// sum + employee.salary es la suma que se da y se va acumulando. 

console.log(`Total de salarios de empleados con salario mayor a 2500000: ${totalSalary}`);


//--------------------------------------------------------------------------------------------//

// Ejercicio 5 - EJEMPLO TRY/CATCH
try {
    // Intenta ejecutar esta operación
    let result = 10 / 0; // Esto provocará un error de división por cero
    console.log(result); // Esta línea nunca se ejecutará debido al error
} catch (error) {
    // Maneja el error
    console.log("Se produjo un error:", error.message);
}

// --------------------------------------------------------------------------------------------------------//

//Ejercicio 6 -  Primise.all

// Función que devuelve una promesa que se resuelve después de un tiempo que se estipulará en los arrays
function resolveAfter(time, value) { //usamos dos parámetros que se llenarán más adelante en el array
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, time);
    });
}

// Array de promesas con diferentes tiempos de espera y diferentes valores/mensajes
const promises = [
    resolveAfter(5000, 'Primera promesa'),
    resolveAfter(7000, 'Segunda promesa'),
    resolveAfter(10000, 'Tercera promesa')
];

// Se usa Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all(promises)
    .then(results => {
        console.log('Todas las promesas se han resuelto:'); // si es exitoso
        console.log(results);
    })
    .catch(error => {
        console.error('Al menos una promesa fue rechazada:'); // si falla
        console.error(error);
    });



// -----------------------------------------------------------------------------------------------// 

//Ejercicio 7 - Lógica de programación 

// Crear una función que no pase parámetros, pero si debe definir dentro de ella un cálculo matemático
// debe contener, además, una promesa con .then .catch y luego con async/await


function math() {
    let div = 25 / 5;
    return div;
}

function getMath() {
    return new Promise((resolve, reject) => {
        const div = math();
        if (div === 8) {
            reject(new Error('Hubo un problema con la división'));
        }
        setTimeout(() => {
            resolve(div);
        }, 2500)
    })
}
// getMath()
//     .then((div) => console.log(div))
//     .catch((error) => { console.log(error.message) });

async function resMath() {
    const a = await getMath();
    console.log(a);
};
resMath();

//----------------------------------------------------------------------------------------------------------------------------//



// Ejercicio 8  - Arreglo con métodos Sort, toSorted y Compare 
// Montar un arreglo usando el método sort y el toSorted, usando el comparador llamando, en lugar 
// de la función comparador un sort. Definir 5 objetos que van a contener dos propiedades: nombre-edad
// Luego llamar al arreglo, lanzándole la función Sort, pero implementando en ella un comparador donde 
// debe retornar un 1, un -1 o un 0. 

//Crear el arreglo de 5 objetos - Luego llamar a Sort, dentro de este como callback usar el compare. 

//Usando el método sort
const animals = [
    {
        name: 'Dante',
        age: 3,
    },
    {
        name: 'Triz',
        age: 2,
    },
    {
        name: 'Max',
        age: 1,
    },
    {
        name: 'Zeus',
        age: 1,
    },
    {
        name: 'Homero',
        age: 7,
    },
]

const animalsOrder = animals.sort((a, b) => a.age - b.age);
const animalsOrderX = animals.sort((a, b) => a.age < b.age ? -1 : a.age > b.age ? 1 : 0);
const animalsOrderXX = animals.sort((a, b) => {
    if (a.age < b.age) {
        return - 1
    }
    if (a.age > b.age) {
        return 1
    }
    // si a.age = b.age
    return 0
});
console.log(animalsOrder); //array sort 
console.log(animalsOrderX) // resultado con la operación ternaria
console.log(animalsOrderXX) // resultado con la función arrow sin ternaria 


//Para que el resultado mostrado en consola salga con los valores de la comparación 
const compareAges = (a, b) => {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    } else {
        return 0;
    }
};

const animalsOrderIX = animals.sort(compareAges);
console.log(animalsOrderIX.map((animal, index, array) => index > 0 ? compareAges(array[index - 1], animal) : 0));


//Con el método toSorted

const animalsI = [
    {
        name: 'Dante',
        age: 3,
    },
    {
        name: 'Triz',
        age: 2,
    },
    {
        name: 'Max',
        age: 1,
    },
    {
        name: 'Zeus',
        age: 1,
    },
    {
        name: 'Homero',
        age: 7,
    },
]

const animalsOrderI = animalsI.toSorted((a, b) => a.age - b.age);
const animalsOrderII = animalsI.toSorted((a, b) => a.age < b.age ? -1 : a.age > b.age ? 1 : 0); // Con Operadores ternarios 
const animalsOrderIII = animalsI.toSorted((a, b) => { //con una "función normal"
    if (a.age < b.age) {
        return - 1
    }
    if (a.age > b.age) {
        return 1
    }
    // si a.age = b.age
    return 0
});
console.log(animalsOrderI); // array toSorted
console.log(animalsOrderII); // resultado con la operación ternaria aplicada 
console.log(animalsOrderIII); // resultado con la función arrow normal 

console.log(animalsI); // array original

