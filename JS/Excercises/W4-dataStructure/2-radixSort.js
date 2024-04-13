//Función arrow que toma un número 'num' como argumento, retornando la cantidad de dígitos que tiene 
// el número cuando se convierte en una cadena (string) 

let digitCount = (num) => num.toString().length;

//En mostDigit Se usa la desestructuración de arreglos. Toma un array de números (nums) y devuelve el 
// número de dígitos del numero más largo/grande del array. 
//El Math.max busca el número de 'caractéres' que compone cada número el array, transformado en string.
// Y determina cuál es la longitud más larga, ergo, el número más grande. 
let mostDigits = (nums) => Math.max(...nums.map(x => digitCount(x)));

//getDigit recorre cada número, convertido en cadena y utiliza padStart para agregar ceros al inicio de 
// cada cadena, si es necesario, hasta que alcance la "position +1" de caracteres. 
// Luego, utiliza slice para extraer un dígito específico de la posición calculada desde el final de la cadena. 
// Finalmente, convierte la subcadena resultante de vuelta a un número y la devuelve.
let getDigit = (num, position) => {
    let newV = num.toString().padStart(position + 1, '0')
    return Number(newV.slice(newV.length - position - 1, newV.length - position))
}

// En esta función se hacen ciclos, en los que se crean "buckets" (array de 10 arrays) en cada iteración
// que servirán como contenedores para cada elemento del array según su posición. Esta depende del 
// mostDigits, pues la toma como base de inicio. 
// Al aplicar el getDigit, este itera cada elemento y obtiene un dígito particular que ubica en una 
// posición estimada, recorriendo el número de derecha a izquierda. 
// Luego almacena los resultados en un nuevo array y "vacia" el bucket para una nueva iteración 
let radixSort = (array) => {
    let buckets = Array.from({ length: 10 }, () => [])

    for (let digitIndex = 0; digitIndex < mostDigits(array); digitIndex++) {
        for (let element = 0; element < array.length; element++) {
            let pos = getDigit(array[element], digitIndex);
            buckets[pos].push(array[element])
        }

        array = buckets.flat()
        buckets = Array.from({ length: 10 }, () => [])
    }

    return array;
}

let result = radixSort([1556, 4, 3556, 593, 29, 86, 7]);
//result = radixSort([170, 45, 75, 90, 802, 24, 2, 66]);
console.log(result);