//La POO se basa en crear tipos nuevos de datos denominados objetos. 
//Para ello se tomará al código como un módulo de dos partes (propiedades = atributos = data)
// (funciones = métodos = acciones que puede realizar)
// Para crear un dato nuevo se utiliza una "clase", que es la plantilla donde se definen métodos y atributos
// con la clase se crean objetos de su tipo, dándole valores a sus atributos (INSTANCIAR). 
// Para instanciar cualquier objeto se usa un método constructor (crea un objeto y asigna valores para iniciarlo)
// Una vez construido un objeto, se puede usar punto (.) para modificarlo o consultar sus atributos o usar sus métodos. 
//


// Ejemplo 1 - un objeto, del cual se va a trabajar con sus propiedades
const dog = {
    name: 'Dante',
    age: 3,
    color: 'black and white',
    race: 'Chihuhaha'
}

console.log(dog.color);
console.log(dog.name);
console.log(dog.race);
console.log(dog.age);

//OBJETO LITERAL y su función o método

const person = {
    name: 'Edwin',
    age: 35,
    race: 'Mestizo',

    comer() {
        console.log('La persona está comiendo')
    }
};

console.log(person);


// Ejemplo 2 - Una clase animal, con constructor vacío, que solo permite instanciar un objeto 

class animal { // esta es una clase que creará un objeto con los atributos que se le den 
    constructor() { // cuando la clase y el constructor está vacío, se instancia el objeto directamente como aquí
        this.name = 'Triz'; // el problema es que sólo sirve para instanciar un objeto, no varios 
        this.age = 8;
        this.color = 'gris';
    }
}

const cat = new animal(); // con el new Animal estoy instanciando mi clase 
console.log(cat);

// Ejemplo 3 - Una clase, con un constructor con parámetros para poder instanciar varios objetos 
class animal1 {
    constructor(name, age, color) { // en este caso estoy creando un constructor con propiedades lo que me permite luego instanciar varios objetos
        this.name = name; // este nombre es igual a nombre ... 
        this.age = age;
        this.color = color;
    }
}



const parrot = new animal1('Cacao', 4, 'verde'); // aquí, como ya tengo un constructor definido, le paso los datos particulares que debe tener 
console.log(parrot);

const monkey = new animal1('Cris', 2, 'negro');
console.log(monkey);

const rabbit = new animal1('Motas', 1, 'blanco');
console.log(rabbit);

// PILARES DE LA POO 

// Abstracción // es la definición de los atributos y métodos que definirán el objeto 
// Encapsulamiento // es la definición de qué atributos y métodos serán privados o no 
// Herencia // clase padre o super clase (la que hereda) / hijo o subclase (la heredada)
// Polimorfismo // las diferentes formas, acciones y demás que podrá realizar una función 


// --------------------------------------------------------------------------------------------------// 



