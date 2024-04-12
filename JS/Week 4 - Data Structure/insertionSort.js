// Recorrer la lista: El algoritmo comienza recorriendo la lista desde el segundo elemento (índice 1) 
// hasta el final de la lista.
// Seleccionar un elemento: En cada iteración, se selecciona el elemento actual como clave.
// Buscar un lugar adecuado: El algoritmo busca un lugar adecuado para el elemento clave en la parte
//  ya ordenada de la lista (a la izquierda del elemento clave).
// Desplazar los elementos mayores: Si el elemento clave es menor que algún elemento en la parte ordenada, 
// esos elementos se desplazan hacia la derecha para hacer espacio para el clave.
// Insertar el elemento clave: Finalmente, se inserta el elemento clave en su posición correcta dentro 
// de la parte ordenada de la lista.
// Repetir: Se repite este proceso para cada elemento de la lista, desde el segundo elemento hasta el final.


//VARIABLES 
// KEY: Es el elemento que se selecciona en cada iteracion, para encontrarle una posición adecuad dentro de 
// la parte ordenada de la lista. 
//i: Es el índice que se usa para recorrer la lista, comenzando desde el índice 1
//j: Es el índice que se usa para buscar la posición correcta para el elemento "key" en la parte ordenada


function insertionSort(arr) {
    let valToInsert = arr[1]; // Esta variable es la clave "key"
    let j;
    for (let i = 1; i < arr.length; i++) {//en cada iteración la "key" recibe el valor del siguiente elemento 
        // en la lista y representa la clave que dee insertarse en su posicón correcta en la parte ordenada de la lista
        valToInsert = arr[i];

        //j = i -1 indica que se inicia j como el índice del elemento anterior al índice actual de i. (Retrocede desde el índice actual)
        // j >= 0 && arr[j] > valToInsert el bucle continúa mientras j sea mayor o igual a 0 (que no hay llegado al inicio de la lista)
        //y mientras arr[j] seama mayor a la key  
        //
        for (j = i - 1; j >= 0 && arr[j] > valToInsert; j--) { //compara la "key" con los elementos 
            //de la parte ordenada de la lista, a la izquierda de valToInsert. si encuentra elementos mayores 
            //que el key, los desplaza hacia la derecha para hacer espacio a la clave. 
            arr[j + 1] = arr[j]; // Si arr[j] es mayor que valToInsert, desplaza arr[j] una posición hacia la 
            //derecha (j + 1). 
            //Esto hace espacio para insertar valToInsert en su posición correcta.
        }
        arr[j + 1] = valToInsert; //Se inserta la key en su posición correcta. 
    }
    return arr;
}
let arrays = [12, 2, 3, 41, 5, 6, 7, 83, 9, 10, 11, 18, 13, 22, 34, 15, 56, 35, 66, 8, 87, 89];
console.log(arrays);
let result = insertionSort(arrays);
console.log(result);


// Ejemplo 2 - Usando While 

function inSort(val) {
    for (let i = 1; i < val.length; i++) {
        let j = i - 1;
        let aux = val[i];
        while (j >= 0 && val[j] > aux) {
            val[j + 1] = val[j];
            --j;
        }
        val[j + 1] = aux;
    }
    return val;
}

let arr = [12, 2, 3, 41, 5, 6, 7, 83, 9, 10, 11, 18, 13, 22, 34, 15, 56, 35, 66, 8, 87, 89];
console.log(arr);
let res = inSort(arr);
console.log(res);

// recordar que la notación arr[j] se refiere al elemento en la posición j del array arr.