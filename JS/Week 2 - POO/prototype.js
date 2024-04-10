// JS en lugar de usar clases, en la POO, utiliza un enfoque basado en prototipos
// esto quiere decir, que las funciones tienen una propiedad especial llamada "prototype", que es un objeto
// Así, cuando se define una función constructora, se pueden agregar propiedades y métodos a su prototipo
// que estarán disponibles para todos los objetos creados utilizando esa funcipon constructora. 

// Ejemplo 1

// Función constructora 
function People(name, age) {
    this.name = name;
    this.age = age;
}

// Método fuera de la función constructora // yo puedo dejar el método dentro de la función constructora 
// o dentro de mi clase, pero sería como "quemar data". Lo más natural es crearlo aparte, como este caso
People.prototype.walk = function () { // aunque tiene una estructura diferente, funciona como una función normal
    console.log('Debo caminar todos los días')
};

const admin = new People("Raul Meneses", 27);
const mechanic = new People("Brayan Díaz", 37);

console.log(admin.walk()); // Si no llamo al método prototipo, no aparece nada, sólo me imprime el objeto
console.log(mechanic)


// ---------------------------------------------------------------------------------------------// 
// Cuando usamos una clase, podemos instanciar un objeto a partir de ella, pero sus atributos serán 
//definidos de forma independiente, lo cual implica que al llamar sus métodos, se pueda obtener un resultado 
// diferente en cada caso. 
// Los dos comparten lógica, pero mantienen su estado de forma independiente 

// HERENCIA PROTOTÍPICA 
// en JS la herencia funciona siempre como una cascada 

function Engineer(name, age, email) {
    this.super = People; // con este this.super le digo tráigame algo de mi clase principal people
    this.super(name, age); // con este this.super(name,age) le indico los parámetros que va a traer de people
    this.email = email; // dado que people no cuenta con este atributo, lo adiciono como algo propio de 
}


// Engineer hereda de People y  se trae todo lo del prototipo principal 
Engineer.prototype = new people(); // aquí, como ya dije que ingeniero es una instancia de persona, lo traigo como nueva persona
Engineer.prototype.constructor = Engineer; // pero aquí, ya le digo que me debe agregar lo que le incluí en la función constructora, y por eso digo que es = engineer

// sobreescritura del método del prototipo padre 
Engineer.prototype.walk = function () {
    console.log("Me levanto a las 6am a caminar");
}

// se hace un método propio 
Engineer.prototype.work = function () {
    console.log("Me levanto a las 6am a trabajar");
}

const man = new engineer("Raul Meneses", 27, "raulmeneses@hotmail.com");
const woman = new engineer("Victoria Díaz", 37, "vicky@gmail.com");

console.log(man);
console.log(woman);
woman.work();
woman.walk();


// SE DEBE USAR UpperCamelCase cuando se nombren las clases 

