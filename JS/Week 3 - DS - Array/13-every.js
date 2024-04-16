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