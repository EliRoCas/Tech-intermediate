// Ejercicio 5 - EJEMPLO TRY/CATCH
try {
    // Intenta ejecutar esta operación
    let result = 10 / 0; // Esto provocará un error de división por cero
    console.log(result); // Esta línea nunca se ejecutará debido al error
} catch (error) {
    // Maneja el error
    console.log("Se produjo un error:", error.message);
}
