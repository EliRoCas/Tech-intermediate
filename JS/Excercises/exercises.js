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
        if (div !== 5) {
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


// Ingresando los números por teclado 
function getNumbers() {
    return new Promise((resolve, reject) => {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            reject(new Error('Por favor, ingrese números válidos.'));
        } else {
            resolve({ num1, num2 }); // Resuelve la promesa con los números ingresados
        }
    });
}

function getDivision() {
    return getNumbers()
        .then(({ num1, num2 }) => {
            const div = num1 / num2;
            if (div === 0.5) {
                throw new Error('Hubo un problema con la división');
            }
            return div; // Retorna el resultado de la división
        });
}

getDivision()
    .then((result) => console.log('El resultado de la división es:', result))
    .catch((error) => console.error(error.message));


//----------------------------------------------------------------------------------------------------------------------------//

// Ejercicio 8 - Herencia 

// Crear una clase que se llame contratación, definiendo atributos propios de ella, y llamar dos clases externas
// una será empleado fijo y otra empleado por prestación de servicios. En el método se incluirá la diferencia entre ambos 

class Hiring {
    constructor(rol, salary, experience, status) {
        this.rol = rol;
        this.salary = salary;
        this.experience = experience;
        this.status = status;
    }
    payment() {
        console.log("El pago será quincenal")
    }
}

const vacant = new Hiring("Auxiliar", 1500000, "6 months", "trainer");
console.log(vacant);
vacant.payment();

class PermanetEmployee extends Hiring {
    constructor(rol, salary, experience, status, socialSecurity, socialBenefits) {
        super(rol, salary, experience, status);
        this.socialSecurity = socialSecurity;
        this.socialBenefits = socialBenefits;
    }
    holidays() {
        console.log("En diciembre tengo 15 días de vacaciones")
    }
}

class ProvisionServicesEmployee extends Hiring {
    constructor(rol, salary, experience, status, workHours) {
        super(rol, salary, experience, status);
        this.workHours = workHours;
    }
    write() {
        console.log("Este es el reporte del avance del proyecto")
    }
}

const developer = new PermanetEmployee(
    "Software developer", 3500000, "3 years", "junior", "ARL, EPS, Caja de Compensación", "Vacaciones pagas");

const freelance = new ProvisionServicesEmployee(
    "Software developer", 5800000, "7 years", "senior", "Without Schedule"
)

console.log(developer);
developer.holidays();
console.log(freelance);
freelance.write();


// Con HERENCIA PROTOTÍPICA 
// Padre o SuperClase 
function Hiring1(rol, salary, experience, status) {
    this.rol = rol;
    this.salary = salary;
    this.experience = experience;
    this.status = status;
};

Hiring1.prototype.payment2 = function () {
    console.log("Puede acceder a su pago")
};

const vacant2 = new Hiring1("Auxiliar", 1500000, "6 months", "trainer");
console.log(vacant2.payment2());

//Hijos o SubClases 
// Función constructora 
function PermanetEmployee1(rol, salary, experience, status, socialSecurity, socialBenefits) {
    this.super = Hiring1;
    this.super(rol, salary, experience, status)
    this.socialSecurity = socialSecurity;
    this.socialBenefits = socialBenefits;
};

//herencia, se instancia una clase padre y luego se le dice al sistema que a esa clase, 
//le agregue las características propias del hijo.
PermanetEmployee1.prototype = new Hiring1;
PermanetEmployee1.prototype.constructor = PermanetEmployee1;

//Sobreescritura del método padre 
PermanetEmployee1.prototype.payment2 = function () {
    console.log("El pago de la vacante era de 2500000")
};

//Método propio del hijo 
PermanetEmployee1.prototype.holidays1 = function () {
    console.log("En diciembre tengo 15 días de vacaciones")
};


//Segundo hijo de Hiring
// Función constructora 
function ProvisionServicesEmployee1(rol, salary, experience, status, workHours) {
    this.super = Hiring1
    this.super(rol, salary, experience, status);
    this.workHours = workHours;
};
//Herencia - Segundo hijo
ProvisionServicesEmployee1.prototype = new Hiring1;
ProvisionServicesEmployee1.prototype.constructor = PermanetEmployee1;

//Sobreescritura del método padre
ProvisionServicesEmployee1.prototype.payment2 = function () {
    console.log("El pago global por este proyecto es de 12000000")
};

// Método propio del segundo hijo
ProvisionServicesEmployee1.prototype.write1 = function () {
    console.log("Este es el reporte del avance del proyecto")
};


const developer1 = new PermanetEmployee1(
    "Software developer", 3500000, "3 years", "junior", "ARL, EPS, Caja de Compensación", "Vacaciones pagas");

const freelance1 = new ProvisionServicesEmployee1(
    "Software developer", 5800000, "7 years", "senior", "Without Schedule");

console.log(developer1);
developer1.holidays1();
console.log(freelance1);
freelance1.write1();


// ----------------------------------------------------------------------------------------------------------------------------------// 

// Ejercicio 9 -- Encapsulamiento GET - SET 

//Crear una clase que se llame animal, con tres parámetros, tres instancias, con una propiedad que esté null
// para utilizar el get y el set

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.species = null;
    }

    get getSpecies() {
        return this.species;
    }

    set setSpecies(species) {
        this.species = species;
    }
}

class Dog extends Animal {
    constructor(name, age, color, loyalty) {
        super(name, age, color);
        this.loyalty = loyalty;
    }
}

class Cat extends Animal {
    constructor(name, age, color, purring) {
        super(name, age, color);
        this.purring = purring;
    }
}
class Elephant extends Animal {
    constructor(name, age, color, bigEars) {
        super(name, age, color);
        this.bigEars = bigEars;
    }
}


const dog1 = new Dog("Dante", 3, "black and white", true);
console.log(dog1);
dog1.setSpecies = "Chihuaha";
console.log(dog1.getSpecies);

const cat1 = new Cat("Kira", 7, "gray", true);
console.log(cat1);
cat1.setSpecies = "Azul Ruso";
console.log(cat1.getSpecies);

const elephant1 = new Elephant("Triz", 2, "gray", true);
console.log(elephant1);
elephant1.setSpecies = "Africano";
console.log(elephant1.getSpecies);


// -----------------------------------------------------------------------------------------------------// 

// Ejercicio 10 - HERENCIA Y POLIMORFISMO - Con lógica 

class Car {
    constructor(type, displacement, brand, passagers) {
        this.type = type;
        this.displacement = displacement;
        this.brand = brand;
        this.passagers = passagers;
    }

    SOAT() {
        console.log(`${this.type} tien el SOAT vigente`)
    }
}

class Motorcycle extends Car {
    constructor(type, displacement, brand, passagers, chargeCapacity) {
        super(type, displacement, brand, passagers);
        this.chargeCapacity = chargeCapacity;
    }
    SOAT() {
        super.SOAT();
        const calculateSOAT = () => { // Se crea esta contante, para aplicar el condicional if ks
            if (this.displacement < 100) {
                console.log(`Este año, 2024, el valor pagado fue de 230200`);
            } else if (this.displacement >= 100 && this.displacement < 200) {
                console.log(`Este año, 2024, el valor pagado fue de 308500`)
            } else if (this.displacement > 200) {
                console.log(`Este año, 2024, el valor pagado fue de 830100`)
            }
        };
        calculateSOAT();
    }
}

let gn125 = new Motorcycle("Gasolina", 124, "Suzuki", "200kg");
console.log(gn125);
gn125.SOAT();

let vstrom = new Motorcycle("Gasolina", 650, "Suzuki", "400 kg");
console.log(vstrom);
vstrom.SOAT();

let vogue = new Motorcycle("Híbrida", 250, "AKT", "250kg");
console.log(vogue);
vogue.SOAT();



// ---------------------------------------------------------------------------------------------------//

// Ejercicio 11 - FOREACH VS MAP 

//forEach

const array0 = [1, 2, 3, 4, 5]; //Se crea un array, 
array0.forEach(element => { // Se aplica el método forEach a una función arrow, donde a cada elemento del
    console.log(element * 2);  // array lo multiplica por 2 y lo imprime.  
});


//MAP 

const arrayM = [1, 2, 3, 4, 5]; // Se crae un nuevo array
const newArray = arrayM.map(elementM => elementM * 2); // Se crea una constante donde se almacenará
//el arreglo resultante de aplicar la función arrow, es decir, multiplicar cada elemento del array por 2 
console.log(newArray);  // Imprime [2, 4, 6, 8, 10] 



//-------------------------------------------------------------------------------------------------// 

// Ejercicio 13 - Array usando Filter 

// Declaración de un array 
const numbersF = [15, 20, 30, 45, 60, 75, 100, 105, 120, 150, 180];

// Utilizamos el método filter para encontrar los números que son múltiplos de 3 y 5
const multiplesOf3And5 = numbersF.filter(num => {
    // Comprobamos si el número es divisible por 3 y 5 usando el operador de módulo (%)
    // Si el resultado es igual a 0, significa que el número es divisible por ambos
    return num % 3 === 0 && num % 5 === 0;
});

// Imprimimos los números que son múltiplos de 3 y 5
console.log(multiplesOf3And5);  // [15, 30, 45, 60, 75, 105, 150]



//-----------------------------------------------------------------------------------------------// 

// Ejercicio 13  - Arreglo con métodos Sort, toSorted y Compare 
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



// ----------------------------------------------------------------------------------------------// 
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



// ---------------------------------------------------------------------------------------------------//

// Ejercicio 15 - margeSort

// Función Merge Sort
function mergeSort(arr) {
    // Si el array tiene 1 elemento o está vacío, está ordenado, así que se retorna tal cual
    if (arr.length <= 1) {
        return arr;
    }

    // Calcular el punto medio del array para dividirlo en dos
    const middle = Math.floor(arr.length / 2);

    // Dividir el array en dos mitades
    const left = arr.slice(0, middle); //Usamos el método .slice() para extraer una copia de cada 
    // mitad del array, desde middle hasta el final
    const right = arr.slice(middle);

    // Recursivamente aplicar Merge Sort a las dos mitades
    const sortedLeft = mergeSort(left); // los datos de cada iteración de almancenan 
        const sortedRight = mergeSort(right); // en sortedLeft y sortedRaight respectivamente

    // Combinar las dos mitades ordenadas en un solo array ordenado usando el método merge 
    return merge(sortedLeft, sortedRight);
}

// Función merge para combinar dos arrays ordenados
function merge(left, right) {
    // Array resultado
    let result = [];
    // Pivotes para recorrer los arrays left y right
    let i = 0;
    let j = 0;

    // Mientras haya elementos en left o right
    while (i < left.length && j < right.length) {
        // Comparar elementos de left y right
        if (left[i] <= right[j]) {
            // Si el elemento en left es menor o igual, agregarlo a result
            result.push(left[i]);
            // Incrementar el pivote de left
            i++;
        } else {
            // Si el elemento en right es menor, agregarlo a result
            result.push(right[j]);
            // Incrementar el pivote de right
            j++;
        }
    }

    // Agregar los elementos restantes de left o right si quedan
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    // Retornar el array resultante ordenado
    return result;
}

// Array de números desordenados
const array = [12, 11, 13, 5, 6, 7];

// Aplicar Merge Sort al array y obtener un array ordenado
const sortedArray = mergeSort(array);

// Imprimir el array ordenado
console.log(sortedArray);
