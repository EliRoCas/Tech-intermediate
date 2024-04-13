// Función Merge Sort
function mergeSort(arr) {
    // Si el array tiene 1 elemento o está vacío, está ordenado, así que se retorna tal cual
    if (arr.length <= 1) {
        return arr;
    }

    // Calcular el punto medio del array para dividirlo en dos
    const middle = Math.floor(arr.length / 2);

    // Dividir el array en dos mitades
    const left = arr.slice(0, middle); //Usamos el método .slice() para extraer una copia de cada 
    // mitad del array, desde middle hasta el final
    const right = arr.slice(middle);

    // Recursivamente aplicar Merge Sort a las dos mitades
    const sortedLeft = mergeSort(left); // los datos de cada iteración de almancenan 
        const sortedRight = mergeSort(right); // en sortedLeft y sortedRaight respectivamente

    // Combinar las dos mitades ordenadas en un solo array ordenado usando el método merge 
    return merge(sortedLeft, sortedRight);
}

// Función merge para combinar dos arrays ordenados
function merge(left, right) {
    // Array resultado
    let result = [];
    // Pivotes para recorrer los arrays left y right
    let i = 0;
    let j = 0;

    // Mientras haya elementos en left o right
    while (i < left.length && j < right.length) {
        // Comparar elementos de left y right
        if (left[i] <= right[j]) {
            // Si el elemento en left es menor o igual, agregarlo a result
            result.push(left[i]);
            // Incrementar el pivote de left
            i++;
        } else {
            // Si el elemento en right es menor, agregarlo a result
            result.push(right[j]);
            // Incrementar el pivote de right
            j++;
        }
    }

    // Agregar los elementos restantes de left o right si quedan
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    // Retornar el array resultante ordenado
    return result;
}

// Array de números desordenados
const array = [12, 11, 13, 5, 6, 7];

// Aplicar Merge Sort al array y obtener un array ordenado
const sortedArray = mergeSort(array);

// Imprimir el array ordenado
console.log(sortedArray);