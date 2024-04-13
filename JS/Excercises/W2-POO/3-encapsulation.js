// Ejercicio 9 -- Encapsulamiento GET - SET 

//Crear una clase que se llame animal, con tres parámetros, tres instancias, con una propiedad que esté null
// para utilizar el get y el set

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.species = null;
    }

    get getSpecies() {
        return this.species;
    }

    set setSpecies(species) {
        this.species = species;
    }
}

class Dog extends Animal {
    constructor(name, age, color, loyalty) {
        super(name, age, color);
        this.loyalty = loyalty;
    }
}

class Cat extends Animal {
    constructor(name, age, color, purring) {
        super(name, age, color);
        this.purring = purring;
    }
}
class Elephant extends Animal {
    constructor(name, age, color, bigEars) {
        super(name, age, color);
        this.bigEars = bigEars;
    }
}


const dog1 = new Dog("Dante", 3, "black and white", true);
console.log(dog1);
dog1.setSpecies = "Chihuaha";
console.log(dog1.getSpecies);

const cat1 = new Cat("Kira", 7, "gray", true);
console.log(cat1);
cat1.setSpecies = "Azul Ruso";
console.log(cat1.getSpecies);

const elephant1 = new Elephant("Triz", 2, "gray", true);
console.log(elephant1);
elephant1.setSpecies = "Africano";
console.log(elephant1.getSpecies);
