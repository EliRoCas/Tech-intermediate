// BÚSQUEDA LINEAL

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linealSearch(array, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == val) {
            return i;
        }
    }
    return -1;
}

console.log(linealSearch(array, 9));

// Ejemplo 2 
let arrays = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function liSearch(elem, arrays) {
    for (let i in arrays) {
        if (arrays[i] == elem) {
            return i
        };
    }
    return -1
}

console.log(liSearch("d", arrays));