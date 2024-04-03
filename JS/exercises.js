//Ejercicio - Lógica de programación 


//----------------------------------------------------------------------------------------------------------------------------//

// Ejercicio 2 - Arreglo con métodos Sort, toSorted y Compare 
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


//Otro ejemplo 
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

