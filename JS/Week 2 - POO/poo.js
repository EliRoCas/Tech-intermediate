//La POO se basa en crear tipos nuevos de datos denominados objetos. 
//Para ello se tomará al código como un módulo de dos partes (propiedades = atributos = data)
// (funciones = métodos = acciones que puede realizar)
// Para crear un dato nuevo se utiliza una "clase", que es la plantilla donde se definen métodos y atributos
// con la clase se crean objetos de su tipo, dándole valores a sus atributos (INSTANCIAR). 
// Para instanciar cualquier objeto se usa un método constructor (crea un objeto y asigna valores para iniciarlo)
// Una vez construido un objeto, se puede usar punto (.) para modificarlo o consultar sus atributos o usar sus métodos. 
//



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

class animal { // esta es una clase que creará un objeto con los atributos que se le den 
    constructor() { // el constructor es el encargado de agregar los atributos y métodos de una clase al momento de instanciar
        this.name = 'Triz';
        this.age = 8;
        this.color = 'gris';
    }
}
class animal1 {
    constructor(name, age, color) { // en este caso estoy creando un constructor con propiedades 
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

 const cat = new animal(); // con el new Animal estoy instanciando mi clase 
 console.log(cat);

 const parrot = new animal1 ('Cacao', 4, 'verde'); // aquí, como ya tengo un constructor definido, le paso los datos particulares que debe tener 
 console.log(parrot);

 const monkey = new animal1 ('Cris', 2, 'negro');
 console.log(monkey);

 const rabbit = new animal1 ('Motas', 1, 'blanco');
 console.log(rabbit);

 // PILARES DE LA POO 

 // Abstracción // es la definición de los atributos y métodos que definirán el objeto 
 // Encapsulamiento // es la definición de qué atributos y métodos serán privados o no 
  // Herencia // clase padre o super clase (la que hereda) / hijo o subclase (la heredada)
 // Polimorfismo // las diferentes formas, acciones y demás que podrá realizar una función 