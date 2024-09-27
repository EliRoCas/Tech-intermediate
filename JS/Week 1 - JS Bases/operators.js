// AND (&&) -- Se deben cumplir las condiciones para activar el flujo
// En este ejemplo debe obtenerse el "sí", porque ambas operaciones se cumplen
if (5 > 4 && 6 == 6) {
    console.log("si cumple con la condición")
}
else {
    console.log("no cumple con la condición")
};

// En este, no se cumple, porque sólo la mitad de la operación es correcta
if (5 > 4 && 6 == 8) {
    console.log("si cumple con la condición")
}
else {
    console.log("no cumple con la condición")
};

// OR (||) -- Se puede cumplir sólo una condición
// En este ejemplo debe correr el primer ciclo, donde se cumple una parte de la condición
if (5 > 4 && 6 == 8) {
    console.log("si cumple con la condición")
}
else {
    console.log("no cumple con la condición")
};

// En este ejemplo, dado que no se cumple ninguna parte de la condición, debe saltar al "else"
if (5 < 4 && 6 == 8) {
    console.log("si cumple con la condición")
}
else {
    console.log("no cumple con la condición")
};

// -----------------------------------------------------------------------------------------------------///

// SWITCH - CASE -- Es una estructura de flujo condicional con diferentes casos específicos.

switch (5 - 4) {
    case 1:
        console.log("variable es igual a uno"); // en este ejemplo debe arrojar este primer caso
        break;
    case 2:
        console.log("variable es igual a dos");
        break;
    case 3:
        console.log("variable es igual a dos");
        break;
    default:
};

// Ejemplo 2
// Hacer un ejercicio que nos permita saber a cuántos juegos de niños podemos ingresar
// según los créditos. Utilizando SWITCH - Tener en cuenta el número de créditos

// let credits;
// let entry = "salas:";
// credits = 2; //Con datos 'quemados'

// switch (credits) {
//     case 1:
//         console.log("Tienes acceso a la sala de niños de 5 a 8 años");
//         break;
//     case 2:
//         console.log("tienes acceso a las salas de niños de 7 a 9 años");
//         break;
//     case 3:
//         console.log("tienes acceso a las salas de niños de 9 a 12 años");
//         break;
//     case 4:
//         console.log("tienes acceso a las salas de niños de 13 a 15 años");
//         break;
//     default:
// }

// Ingresando datos por teclado e imprimiendo en pantalla
//  creditsI = parseInt(prompt("¿Cuántos créditos va a cancelar?"));

// switch (creditsI) {
//     case 1:
//         entry += " de 5 a 8 años";
//         break;
//     case 2:
//         entry += " de 8 a 10 años";
//         break;
//     case 3:
//         entry += " de 10 a 13 años";
//         break;
//     case 4:
//         entry += " de 14 a 16 años";
//         break;
//     default:
// }
// alert(entry);

// El alert o el getDocumentbyID, lo debemos usar cuando usamos el prompt, para que nos muestre los datos

//--------------------------------------------------------------------------------------------------//

// OPERADOR DE FLUJO TIPO BUCLE -- Estos operadores dan una instrucción de un ciclo compuesto por 3 zonas
//  las cuales se separan por un punto y coma:
// 1. se declara e inicializa una variable dinámica (de valor cambiante dentro del ciclo). (let i / ejemplo)
// 2. se da la condición que permite la repetición del ciclo, siempre que se cumpla.  (i < 10)
// 3. Se define la acción a realizar si se cumple la condición. (i ++)

// Ciclo FOR
//  for (let i = 1; i < 10; i++) {
//      console.log(i);
//  }

// Ejemplo 2
//  Ciclo FOR - Factoriales
//  Cuando el dato es estátitico

// const n = 8;
// let fact = 1; // esta variable funciona como un contador, que almacenará el resultado del factorial

// for (let i = 1; i <= n; i++) {
//     fact *= i; // como funciona como un contador, lo que hace es que en cada iteración, el sistema
// actualiza el valor de la variable (resultado del factoria) y lo multiplica
// por el valor actual de i, que incrementa mientras sea menor a n.
// fact *= i es igual a fact = fact * i
// el ciclo sería (fact = 1 * i = 1), (fact = 1 * i = 2 = fact 2), (fact = 2 * i = 3 = fact 6)...
// };

// console.log(`el factorial del número ${n} es ${fact}`)

// Cuando el dato se ingresa por pantalla
// let n = parseInt(prompt("ingrese el número del que desea el factorial"));
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;
// };

// alert(`el factorial del número ${n} es ${fact}`)

// Ejercicio 3 - Utilizar el ciclo for, para pedir un número por pantalla, ingresarlo por teclado
//  y que muestre los números pares del número ingresado, sólo debe mostrar los que sean menores.

// let result= "";
// let number = parseInt(prompt("Ingrese cualquier número"));
// let par = 0; //contador - guarda el número par de cada iteración

// La variable i = 1 se utiliza para generar los números pares
//  el 'par < number ' valida que los números pares generados sean menores al número ingresado

// for (let i = 1; par < number; i++) {
//     par = i * 2; // esto es igual a (1*2), segunda iteración (2*2), tercara (3*2)
//     result += par + "\n"; // concatena los resultados de cada iteración y (\n) les agrega un salto del linea
// }
// alert(result)

// si en par usáramos  i/2 lo que obtendríamos serían valores impares o decimales

//----------------------------------------------------------------------------------------------------///

// Estructura FOR IN -- Se rerroce la colección de propiedades (nombre, id, tipo, etc) de un objeto
// ESTRUCTURA FOR OF -- recorre la estructura de datos elemento a elemento, llamando a los valores de
// las propiedades especificas

// let listaPersonas = [
//     { "nombre": "Carlos", "tipo": "persona", "id": 435 },
//     { "nombre": "Hugo", "tipo": "persona", "id": 876 },
//     { "nombre": "Daniel", "tipo": "persona", "id": 673 },
// ];

// let personas;

// En este ejemplo, se define la variable "personas" que llama el resultado de lo que contiene la propiedad
// for (personas of listaPersonas) {
//     console.log(personas.nombre);
//     console.log(personas.tipo);

//     //Con el for in se llama, no al valor de la propiedad, sino a la propiedad o propiedes del objeto
//     for (let propiedad in personas) {
//         console.log(propiedad);
//     }
// }
// Lo correcto es usar el FOR OF Y EL FOR IN juntos

// -------------------------------------------------------------------------------------------------//

// Estructura WHILE -- Se usa para repetir un conjunto de operaciones hasta que se cumpla con la condición
//  consta de dos elementos: While (condición) - Sentencia
//  Cuando se entra en el WHILE, si la condición se evalua como verdadera, se ejecuta la sentencia,
//  en caso contratio, la ejecución continua con la sentencia POSTERIOR al bucle.

// Ejemplo 1 - este bucle while se itera mientras n es menor a 3
n = 0; // contador
x = 0;
while (n < 3) {
    n++;    // mientras n sea menor a tres, en cada iteración se suma 1 a n. Primero n =1, Segundo n = 2, Tercero n =3
    x += n; // aquí se le está diciendo al sistema que x asumirá el valor de n. Primero x=1, Segundo (n=2 + x =1 => x=3)
    //+= lo que hace es combinar el valor de una variable con otro o concatenar si son string.
}
console.log(x);

// Ejemplo 2
let contador = 0;  // contador
let iterar = true; // variable que se evaluará

while (iterar == true) {
    console.log(contador);
    if (contador == 5) {
        iterar = false; // lo que hace el while aquí cambia el valor de la variable.
    }
    contador++
}
console.log(iterar)

// Ejercicio 3 - con un while con una sola variable
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// ---------------------------------------------------------------------------------------------//

// USO WHILE Y FOR JUNTOS

// Hacer un ejercicio que nos imprima los número impares desde el 10 hasta 71
// USANDO FOR

for (let i = 10; i <= 71; i++) { // i funciona como contador
    if (i % 2 != 0) { // En cada iteración del bucle, se evalúa la condición if (i % 2 != 0).
        // El operador % calcula el residuo de la división de i entre 2.
        // Si el residuo es diferente de cero, significa que i es impar.
        console.log(`Estos son los números impares desde 10 hasta 71 : $ { i }`);
    }
}

// se usa %, porque se busca conocer el residuo, no el cociente, de la división
// se usa !=, porque este operador(llamado no igual) compara si dos valores son iguales. Representa la negación de la igualdad entre 2 valores.

// USANDO WHILE
let a = 10; // contador
let b = 71  // sentencia a evaluar

while (a <= b) { // condición
    if (a % 2 != 0) {
        console.log(`Estos son los números impares desde 10 hasta 71 : $ { a }`)
    }
    a++ // una diferencia importante entre el for y el while, es que el aumento del contador el while lo
    // hace al terminar el bucle, mientras que en el for se establece junto a las condiciones
}

// Ahora con números pares

let x = 12;
let y = 22;
while (x <= b) {
    if (a % 2 == 0) {
        console.log(`Estos son los números pares desde 12 hasta 22 : $ { x }`);
    }
    x++
}

// Ejercicio 4 --
// Hacer un programa que imprima los números del 1 al 51 y que en el:
// se hallen los múltiplos de 3
// se hallen los múltiplos de 5
// imprima en pantalla "somos múltiplos de 3 y 5"

// USANDO WHILE
let c = 1;
//let d = 51 // hacerlo así es otra posibilidad

while (c <= 51) {
    if (c % 3 == 0 && c % 5 == 0) {
        console.log(`Estos son los múltiplos de 3 y 5 : $ { c }`);
    }
    else if (c % 3 == 0) {
        console.log(`Estos son los múltiplos de 3 : $ { c }`);
    }
    else if (c % 5 == 0) {
        console.log(`Estos son los múltiplos de 5 : $ { c }`);
    }
    c++
}

// MÉTODO FOR EACH 

// FOR EACH -- Recorre los elementos de un arreglo 
// el for each recibe un callback como argumento (parámetro). En este caso
// el callback está llamando una función anónima que contiene un parámetro (elementos)
// que representará cada elemento del array.
// Por cada elemento del array, el for each ejecutará el callback 

const array = [10, 12, 13, 14, 'web', 'php', 'visual', '.net'];
array.forEach(function(elementos){
    console.log(elementos);
})