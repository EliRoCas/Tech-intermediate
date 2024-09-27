// PROMESA POR ASYNC/AWAYT -- simplifican el comportamiento del uso síncrono de promesas y realizan 
// un comportamiento específico en un grupo de 'primises'. 
// Mientras las 'promises' se asemejan a las devoluciones de llamadas estructuradas 
// el async/awayt se asemeja a un combinación de generadores y promesas

// Esta forma usa el async - función que devuelve la función resuelta 
// el await -- palabra clave dentro de la función async que indica una espera a que la promesa se resuelva 
//antes de continuar con el código (SOLO PUEDE USARSE UN AWAIT dentro de un ASYNC)

function resolveAfter2Seconds() { //se define una función que devuelve una promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
        }, 7000);
    });
};

async function asyncCall() { // se crea una función asincrónica que imprime la palabra "calling"
    console.log('calling'); // y utiliza el await para esperara a que la promesa devuelta 
    const result = await resolveAfter2Seconds(); // por "resolveArter2Seconds"  se resuelva
    console.log(result); // Mientras todo esto pasa, el programa podrá seguir ejecutando otras tareas 
};

asyncCall();



// Ejemplo 2 

const data = [
    {
        product: "gaseosa",
        price: "5500"
    },
    {
        product: "harina",
        price: "3200"
    },
    {
        product: "pan",
        price: "1800"
    },
    {
        product: "arroz",
        price: "7100"
    },
]

function getData() { //aquí sólo se usa un parámetro porque no se hace la validación
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(data) }, 5000);
    })
}

// getData().then((data) => console.log(data));
// aquí, en lugar de llamar la función y encadenarla con el .then .catch uso la función async/await
async function receiveData() {
    const D = await getData(); // con el await le indicamos que toda la función "getData", 
    //queda guardada ahí y sólo se ejecutará después de que pase la espera.
    console.log(D);
}

receiveData();


// PROMESAS EN PARALELO -- PROMISE.ALL()
// Este método estático toma un iterable de promesas como entrada y devuleve una única promesa 
// que se resuelve cuando todas las promesas del iterable han sido resueltas
// o se rechaza tan pronto como una de las promesas del iterable es rechazada. 
// Es útil cuando se necesistan ejecutar múltiples tareas asincrónicas de manera concurrente, 
// y se desea que se completen antes de continuar con la ejecución del código.  

// Usando el ejemplo 1 y 2 quedaría 

async function asyncAll() {
    console.log('calling all promises');
    const results = await Promise.all([resolveAfter2Seconds(), getData()]);
    console.log(results);
}

// Ejercicio 3 
const soccerTeams = [
    {
        name: "America",
        city: "Cali",
        fundationYear: 1956,
    },
    {
        name: "Pereira",
        city: "Pereira",
        fundationYear: 1996,
    },
    {
        name: "Bucaramanga",
        city: "Bucaramanga",
        fundationYear: 2000,
    },
    {
        name: "Millonarios",
        city: "Bogota",
        fundationYear: 1951,
    },
];

function gerSoccerTeams() {
    return new Promise((resolve, reject) => {
        if (soccerTeams == 0) {
            reject(new Error("No hay datos en el arreglo, puede estar vacío"));
        }
        setTimeout(() => { resolve(soccerTeams); }, 5000);
    });
};

async function showData() {
    const teams = await gerSoccerTeams();
    console.log(teams)
};

showData();


// ---------------------------------------------------------------------------------------------// 

// Crear una función que no pase parámetros, pero si debe definir dentro de ella un cálculo matemático
// debe contener, además, una promesa con .then .catch y luego con async/await

let a = 45;
let b = 35;
let res;

function operaciones() {
    return new Promise((resolve, reject) => {
        res = a * b;
        if (res === 1575) {
            resolve('El resultado es correcto ');
        } else {
            reject('error')
        }
    });
}

operaciones()
    .then(function (mensaje) {
        console.log(mensaje)
    }).catch(function (error) {
        console.log(error)
    })