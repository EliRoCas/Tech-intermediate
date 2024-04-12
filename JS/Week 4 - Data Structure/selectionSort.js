// Es otro método de ordenamiento, donde su idea básica es tomar el elemento más pequeño o más grande y 
// este se pone al inicio. Para encontrarlo, se itera y en cada iteración se marca el elemento más pequeño 
// cuando termino de recorrer el arreglo, pongo el más pequeño al inicio y obtengo un "sub arreglo" con los 
// elementos que quedan. Esta acción se repite en cada iteración hasta completar el array. 
// Los intercambios se dan siempre con el primer elemento de la iteración


// Funciona dividiendo la lista en dos partes: la parte ordenada a la izquierda y la parte desordenada a la derecha. 
// En cada iteración, busca el elemento más pequeño en la parte desordenada
//  y lo intercambia con el primer elemento de la parte desordenada. 
// Este proceso continúa hasta que toda la lista esté ordenada.

// SELECTIONSORT()
function selectionSortEx(arr) {
    // Si la lista tiene menos de 2 elementos, no se necesita ordenar.
    if (arr.length < 2) return arr;

    // Recorre cada elemento de la lista
    for (let i = 0; i < arr.length - 1; i++) {
        // Inicializa el índice del mínimo con el elemento actual
        let minIndex = i;

        // Busca el índice del elemento mínimo en la parte desordenada de la lista
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Si el índice del mínimo no es el índice actual, intercambiar los elementos
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    // Devuelve la lista ordenada
    return arr;
}

let arrays = [12, 2, 3, 41, 5, 6, 7, 83, 9, 10, 11, 18, 13, 22, 34, 15, 56, 35, 66, 8, 87, 89];
console.log(arrays);
let result = selectionSortEx(arrays);
console.log(result);



// Ejemplo 2 
function selectionS(ndata) { // función con un array como parámetro 

    let aux = [...ndata]; //variable auxiliar donde se almacenará el array nuevo 

    for (let i = 0; i < ndata.length; i++) {
        let min = aux.slice(i + 1)
            .reduce((a, even, j) => (even < aux[a] ? j + i + 1 : a), i);

        if (min != i) {
            [aux[i], aux[min]] = [aux[min], aux[i]];
        }
    }
    return aux;
}

let arraySort = [5, 12, 59, 15, 3, 29, 8, 30, 17, 45, 1, 100,];
console.log(arraySort);
let resS = selectionS(arraySort);
console.log(resS);





function selectionSort(arr) {
    // Recorre cada elemento de la lista
    for (let i = 0; i < arr.length - 1; i++) {
        // Inicializa el índice del mínimo con el primer elemento del segmento desordenado
        let minIndex = i;

        // Busca el mínimo en el segmento desordenado
        for (let j = i + 1; j < arr.length; j++) {
            // Si el elemento actual es menor que el mínimo actual, actualiza el índice del mínimo
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Si el índice del mínimo es diferente al índice actual, intercambia los elementos
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    // Devuelve la lista ordenada
    return arr;
}

// Ejemplo de uso:
const array = [29, 10, 14, 37, 14];
console.log("Array original:", array);

const sortedArray = selectionSort(array);
console.log("Array ordenado:", sortedArray);
