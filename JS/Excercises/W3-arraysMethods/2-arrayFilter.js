// Ejercicio 13 - Array usando Filter 

// Declaración de un array 
const numbersF = [15, 20, 30, 45, 60, 75, 100, 105, 120, 150, 180];

// Utilizamos el método filter para encontrar los números que son múltiplos de 3 y 5
const multiplesOf3And5 = numbersF.filter(num => {
    // Comprobamos si el número es divisible por 3 y 5 usando el operador de módulo (%)
    // Si el resultado es igual a 0, significa que el número es divisible por ambos
    return num % 3 === 0 && num % 5 === 0;
});

// Imprimimos los números que son múltiplos de 3 y 5
console.log(multiplesOf3And5);  // [15, 30, 45, 60, 75, 105, 150]
