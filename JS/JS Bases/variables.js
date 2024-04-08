
let texto = "¡Hola, mundo!";
console.log(texto);
console.log(typeof (texto)); // el operador 'typeof' indica qué tipo de dato que se está usando 
//string, INT, booleano, etc

let numero = 10;
numero = 20;
console.log(typeof(numero)); // El valor que se imprime en pantalla es 20, porque se modificó el dato de la variable 
numero = "20"; 
console.log(typeof(numero)); // Además, cambia porque el dato está definido como variable (let), 
// lo que permite modificaciones y cambios tanto de valor como de tipo de datos con otras ejecuciones. 


const numero2 = 10;
numero2 = 30;
console.log(numero2); // En este caso se obtiene un error, porque los datos están definidos como constantes
//es decir, no cambian. Al poner un nuevo valor, el sistema indica que no es posible, con el error. 

