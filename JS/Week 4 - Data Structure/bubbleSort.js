// BUBBLESORT(0)
// No es el más eficiente y, por tanto, no es muy recomendable. Se dice que es ineficiente, 
// porque en cada iteración se recorre TODO el array, incluso si ya están ordenados algunos elementos.
// Lo que hace es ordenar un array medianta la repetida comparación e intercambio de elementos, cuando
// sea necesario.  

function bubbleSort(nums) { // Se define la función que recibe un array "numbs" como argumento
    for (let i = 0; i < nums.length; i++) { // se inicia un for para recorrer todos los elementos 
        // donde la variable i actua como el índice del elemento actual 
        if (nums[i] > nums[i + 1]) { // se compara el elemento actual (nums[i]) con el siguiente (nums[i +1])
            // si el elemento actual es mayor que el siguiente, se realiza un intercambio  
            let j = nums[i + 1]; // si nums[i] es mayor que nums[i + 1]. 
            //Primero guarda el valor de nums[i + 1] en la variable j, 
            nums[i + 1] = nums[i]; //luego asigna nums[i] a nums[i + 1] y finalmente asigna j a nums[i].
            nums[i] = j;
            bubbleSort(nums); // Se llama a la función 
        }
    }
    return nums;
}

let arr = [12, 2, 3, 41, 5, 6, 7, 83, 9, 15, 25, 18, 22, 34, 56, 65, 66, 87, 35, 98];
console.log(arr);

let res = bubbleSort(arr);
console.log(res);

// Ejercicio 2 

function bubble(nData) {
    let n = nData.length; // Va a capturar la cantidad de elementos que tenga el array nData

    for (let i = 0; i < n; i++) { // Se controla la iteración del array nData. Por cada iteración
        //se comparan los elementos adyacentes y se realiza intercambios si es necesario. 
        // i funciona como contador de la iteración. 

        for (let j = 0, l = n - i; j < l; j++) { //Con este segundo for se controla las comparaciones 
            // y posibles intercambios de elementos adjacentes. 
            // el índice j comienza en 0 y continúa hasta l, donde l = n - i.
            //  Esto significa que con cada iteración de i, 
            // la longitud l disminuye para reflejar que los últimos elementos ya están ordenados.

            if (nData[j] > nData[j + 1]) { // Dentro del bucle for, se compara nData[j] con nData[j + 1]
                // (es decir, elementos adyacentes en el array nData).

                [nData[j]], [nData[j + 1] = [nData[j + 1], nData[j]]]; // se intercambian los elementos
                //  adyacentes si nData[j] es mayor que nData[j + 1]. 
                // Utiliza destructuring assignment para realizar el intercambio de valores entre 
                // nData[j] y nData[j + 1].
            }
        }
    }
    return nData;
}

console.log("Aquí inicia el segundo array")
let arrayB = [12, 2, 3, 41, 5, 6, 7, 83, 9, 15, 25, 18, 22, 34, 56, 65, 66, 87, 35, 98];
console.log(arrayB);
let resB = bubble(arrayB);
console.log(resB);
