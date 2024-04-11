// MÉTODO QUICKSORT - es un método de ordenamiento recursivo 
// Para lograr la lista ordenada, quickSort utiliza un elemento llamado "pivote", número que tomará como base
// luego recorrerá el arreglo, tomando como base este número 
// moviéndolo de derecha a izquierda, bucando que los elementos mayores a él sean vayan a la derecha, lo demás izquierda

// Ejercicio de ordenamiento Quicksort 

function quicksort(num) {
    // Se indica que si el arreglo tiene longitud menor o igual a 1, ya está ordenado
    if (num.length <= 1) {
        return num;
    }

    // Definimos arreglos para almacenar los elementos menores y mayores al pivote
    let left = [];
    let right = [];
    let aux = [];// Arreglo auxiliar para almacenar el resultado final

    let pivote = num.pop(); // Elegimos el último elemento como pivote. Se usa el "num.pop()" para
    // extraer y eliminar el último elemento del arreglo "num", que luego se asigna como el pivote para 
    // el proceso de particionado en el algoritmo 

    // Longitud del arreglo original
    let n = num.length;

    // Iteramos sobre el arreglo original
    for (let i = 0; i < n; i++) {
        // Si el elemento actual es menor o igual al pivote, lo agregamos a la izquierda (left.push(num[i]))
        if (num[i] <= pivote) {
            left.push(num[i]);
        } else {
            // Si es mayor, lo agregamos a la derecha (right.push(num[i]))
            right.push(num[i]);
        }
    }
    // Concatenamos recursivamente los resultados de ordenar los arreglos izquierdo, pivote y derecho
    return aux.concat(quicksort(left), pivote, quicksort(right));
}

// Arreglo original desordenado
let arr = [14, 23, 3, 4, 54, 6, 7, 8, 45, 9, 1, 11, 12, 13, 22, 34, 32, 56, 65, 16, 78, 87, 98];

console.log(arr);

// Llamamos a la función quicksort para ordenar el arreglo y luego imprimimos el arreglo ordenado 
let res = quicksort(arr);
console.log(res);



// --------------------------------

//Ejemplo 2 

const qSort = (nums) => {
    // caso base que parará la recursión ya que un arreglo que solo contiene
    // un elemento, ya está ordenado
    if (nums.length < 2) return nums;

    const pivot = nums[0]; // En este caso, se elige el primer elemento como pivote, por eso nums[0]
    const smaller = [];
    const bigger = [];

    // ya que escogimos el primer elemento como pivote,
    // empezamos a recorrer el arreglo desde el segundo elemento, por eso inicia i = 1 
    // en el ejemplo anterior, como iniciaba con el último índice, el for iniciaba con i = 0 (primera posición)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) smaller.push(nums[i]);
        else bigger.push(nums[i]);
    }

    // puedes unir las sub-listas ordenadas usando spread de ES6 o .concat(
    return [...qSort(smaller), pivot, ...qSort(bigger)];
}


// Arreglo original desordenado
let array = [14, 23, 3, 4, 54, 6, 7, 8, 45, 9, 1, 11, 12, 13, 22, 34, 32, 56, 65, 16, 78, 87, 98];
console.log(array);

let answer = qSort(array);
console.log(answer);

