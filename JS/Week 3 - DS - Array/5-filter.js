
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


// FILTER -- Se utiliza para crear un nuevo array con todos los elementos que cumplan una condición 
// especificada por una función de filtrado. Los elementos que devuelven "true", se incluirán. 

const numbersXD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 35, 36, 37, 38, 39, 50, 51, 52, 53, 54, 55];
const respO = numbersXD.filter(calculateN); // la función que see envía es la que se pone a continuación

function calculateN(result) {
    return result % 2 == 0;
}
console.log(respO);

//Ejemplo 2 
const fruits3 = ["manzana", "pera", "ajo", "piña", "melocotón", 123, 989565, "uva"];
const resPO = fruits3.filter(valor => valor.length > 4); // el length trae los elementos que tengan 4 caracteres
console.log(resPO);