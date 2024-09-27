//MÉTODO SETIMEOUT() -- establece un temporizador que ejecuta una función o un fragmento de código 
//específico una vez que expira el temporizador. 
// Es una función asincrónica, lo que significa que no se detendrá la ejecución de otras funciones 
// en la pila de funciones. 
// Normalmente actua como callback dentro de una función

setTimeout(() => {
    console.log("This is the first massage");
},
    5000); // este es el temporizador (5 segundos)
setTimeout(() => {
    console.log("This is the second massage");
},
    3000);
setTimeout(() => {
    console.log("This is the third massage");
},
    1000);


// Ejemplo 2 
setTimeout(() => {
    console.log("Hola, mundo");
},
    4000);
setTimeout(() => {
    console.log("Hola, desarrolladores");
},
    6000);
setTimeout(() => {
    console.log("Hola, bootcampers");
},
    10000);

//----------------------------------------------------------------------------------------------------// 
// PROMESAS -- una promesa es un objeto que representa la terminación o fracaso de una operación asincrónica

const actionMovies = [
    {
        movieName: "Duro de matar",
        year: 2000
    },
    {
        movieName: "Ninja",
        year: 2003
    },
    {
        movieName: "La Isla",
        year: 1992
    },
    {
        movieName: "V de Vendetta",
        year: 2021
    },
]

// const actionMovies = [];  // Para probar el reject en la promesa

// toda promesa está compuesta por: 1. la función ejecutora, que toma dos elementos "resolve" y "reject" 
// que son funciones utilizadas para completar(resolve) o rechazar(reject) la promesa respectivamente. 
//2. la operación asincrónica (un setTimeout o await, etc) que indica el tiempo de ejecución o la espera 
// 3. El rechazo o la resolución de la promesa 
function getMovies() {
    return new Promise((resolve, reject) => {
        if (actionMovies == 0) { // se realiza una validación, en este caso que el arreglo no esté vació
            reject(new Error("No se encuentran los datos de las películas"));
            // este "new Error" es un objeto, que tiene tres propiedades, nombre, mensaje y una pila
            //esta es la razón por la cual más adelante, en el catch, se llama un error.message
        }
        setTimeout(() => { // si no está vacío, pasamos a la promesa con la operación asincrónica
            resolve(actionMovies);
        }, 6000)
    });
}

getMovies() //Llamo a mi método (función) y, dado que es una promesa le digo: 
    // Si es exitosa, entonces (then) haga tal cosa (la función arrow usada); 
    // si no es existosa, tome (catch) la excepción y envíe el error que se definió. 
    .then((actionMovies) => console.log(actionMovies)) // este método se usa cuando la promesa se resuelve exitosamente
    // recibe el resultado 
    .catch((error) => { console.log(error.message) }) // en este caso, se utiliza cuando la promesa es rechazada

//siempre que se use una promesa (new Primise) se debe encadenar usando los métodos .then() .catch(), para manejar el éxito o el error 


// ------------------------------------------------------------------------------------------------// 
// PROMESAS - EJEMPLO 2

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
        setTimeout(() => { resolve(data) }, 2500);
    })
}


getData().then((data) => console.log(data)); // Usamos el .then proque usamos una promesa y un resolve 



//----------------------------------------------------------------------------------------------//



