// MARGE SORT - Algoritmo de ordenamiento por mezcla, que recibe una lista desordeana y la ordena .
// Realiza 3 pasos, ordena la mitad izquierda, luego ordena la mitad derecha, luego mezcla las dos mitades 
// Para las primeras 2, utiliza el mismo método mergeSort
// Para profundizar https://www.escuelafrontend.com/algoritmos-de-ordenacion-javascript


// Ejercicio MergeSort() 
// En este ejemplo, primero se tiene como requisito, que las listas a mezclar y ordenar estén ya ordenadas


function mergesort(left, right) {
    let i = 0;
    let d = 0;
    let res = [];

    while (i < left.length || d < right.length) {
        if (i === left.length) {
            res.push(right[d]);
            ++d;
        } else if (d === right.length || left[i] <= right[d]) {
            res.push(left[i]);
            ++i;
        } else {
            res.push(right[d]);
            ++d;
        }
    }
    return res;
}

let num = [2, 11, 23, 45, 67];
let num2 = [3, 12, 24, 55, 87];

let answer = mergesort(num, num2);
console.log(answer);
console.log(answer.length);


//-------------------------------------
// Ejemplo 2

// Creamos un método merge() para ordenar las listas 
const merge = (arr1, arr2) => {
    const result = [];

    // comparamos los valores menores de cada arreglo mientras
    // hayan valores en ambos arreglos
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            // shit() remueve el primer valor del arreglo y lo devuelve
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }

    // si salimos del while loop es porque alguno de los dos arreglos
    // está vacío así que unimos los arreglos
    // utilice el método spread de ES6, pero igual puedes usar .concat()
    return [...result, ...arr1, ...arr2];
};


// Después de haber definido el merge() y que las listas estén ordenadas, definimos el mergeSort()

function mergeSort(arr) {
    // caso base que hará que la recursión pare
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    // divide el arreglo por la mitad continuamente hasta quedar con arreglos de longitud = 1
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // envía los dos sub arreglos a la función merge
    return merge(left, right);
}