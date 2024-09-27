// BÚSQUEDA BINARIA -- 
// Es un algoritmo eficiente para encontrar un elemento específico en un conjunto ordenado de datos. 
// Funciona dividiendo repetidamente a la mitad el segmento de la lista que podría contener el elemento,
// hasta que se reduce el rango de búsqueda a una ubicación específica.  
//Toda búsqueda binaria tiene dos parámetros, los datos y los valores.

// A diferencia de la búsqueda lineal, que busca secuencialmente cada elemento en el arreglo o la lista, 
// la búsqueda binaria utiliza la algoritmia para encontra un elemento más rápidamente. 

// Algoritmo de búsqueda binaria 
function binarySearch(data, value) {
    let left = 0; // Se inicializa un índice para el extremo izquierdo del arreglo
    let right = data.length - 1; // Se inicializa un índice para el extremo derecho del arreglo
    //decimos que data.length - 1, para asegurarnos que el índice right sea el índice del último elemento 
    // del arreglo

    // Mientras el índice izquierdo no sobrepase al índice derecho, continúa el ciclo
    while (left <= right) {
        let half = Math.floor((left + right) / 2); // Se calcula el índice medio del arreglo
        //se utiliza Math.floor para redondear el valor de la ecuación 
        let dato = data[half]; // Se obtiene el valor en la posición media del arreglo

        // Si el valor en la posición media es igual al valor buscado, se retorna la posición media
        if (dato == value) {
            return half;
        }
        // Si el valor buscado es mayor que el valor en la posición media, se ajusta el índice izquierdo
        else if (value > dato) {
            left = half + 1;
        }
        // Si el valor buscado es menor que el valor en la posición media, se ajusta el índice derecho
        else {
            right = half - 1;
        }
    }
    // Si el valor buscado no se encuentra en el arreglo, se retorna -1
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 25, 34, 45, 56];
let num = 12;

console.log(binarySearch(array, num)); // Imprime la posición del número 12 en el arreglo
console.log(binarySearch(array, 9)); // Imprime la posición del número 9 en el arreglo
console.log(binarySearch(array, 34)); // Imprime la posición del número 34 en el arreglo


//--------------------------------------
// Ejemplo 2

function binarySearch2(arr, left2, right2, n) {
    // Si el índice izquierdo es mayor que el índice derecho,
    // significa que el valor no está presente en el arreglo,
    // por lo que retornamos -1.
    if (left2 > right2) return -1;

    // Calculamos el índice del elemento medio del subarreglo actual.
    const half2 = Math.floor((left2 + right2) / 2);

    // Comprobamos si el elemento en el medio es igual al valor buscado.
    // Si es así, retornamos el índice del elemento.
    if (arr[half2] == n) return half2;

    // Si el elemento en el medio es menor que el valor buscado,
    // realizamos una búsqueda recursiva en el subarreglo derecho.
    if (arr[half2] < n) {
        return binarySearch2(arr, half2 + 1, right2, n);
    } else {
        // Si el elemento en el medio es mayor que el valor buscado,
        // realizamos una búsqueda recursiva en el subarreglo izquierdo.
        return binarySearch2(arr, left2, half2 - 1, n);
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 23, 34, 45, 56, 65, 66, 77, 87, 98]

// Llamamos a la función binarySearch2 con el arreglo, los índices inicial y final,
// y el valor que queremos buscar (en este caso, 66).
// El 0 simboliza el índice inicial del arreglo. 
console.log(binarySearch2(arr, 0, arr.length - 1, 66));
console.log(binarySearch2(arr, 0, arr.length - 1, 99));
console.log(binarySearch2(arr, 0, arr.length - 1, 98));



// ---------------------------------------------------------------------------------------------// 
