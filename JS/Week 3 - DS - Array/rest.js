
// FUNCION PARAMETROS REST
function sumar(a, b, c, ...otros) {
    let suma = a + b + c;
    otros.forEach(n => suma += n);
    return suma;
}

console.log(sumar(2, 4, 5, 5));
console.log(sumar(2, 4, 5, 5, 3));
console.log(sumar(2, 4, 5, 5, 3, 4, 5));
console.log(sumar(2, 4, 5, 5, 5, 8, 9));
console.log(sumar(2, 4, 5, 5));


// OPERADOR SPREAD --concatenar arrays
const nuSpr = [1, 2, 3, 4, 5, 6];
const numSpr = [6, 7, 8, 9, 10, 11, 12];
console.log(nuSpr, numSpr);
