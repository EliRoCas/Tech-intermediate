//Ejercicio 6 - Lógica de programación 

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