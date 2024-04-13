//Ejercicio 5 -  Primise.all

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
