// El POLIMORFISMO consiste en diseñar objetos para compartir comportamientos, lo que permite 
// procesar datos de diferentes maneras. 


// Ejercicio 1 - Herencia, Polimorfismo y Sobreescritura de Método 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Buenas noches, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}

let person1 = new Person("Carlos", 22);
console.log(person1);
person1.greeting();

// Herencia - Hijo de Person 
class Developer extends Person {
    constructor(name, age, type) {
        super(name, age);
        this.type = type;
    }

    //Sobreescritura del método de la clase padre // Aquí cambia el método a lo que se indique en los {}
    // greeting() {
    //     console.log(`Yo, ${this.name}, soy un desarrollador ${this.type}.`);
    // }

    // CON POLIMORFISMO no se se sobreescribiría el método, sino que se agregaría nueva información 
    greeting() {
        super.greeting(); // Aquí llamamos al método original
        console.log(`Soy un desarrollador ${this.type}.`); // Aquí agregamos el comportamiento extra
    }
}

let developer1 = new Developer("Edwin", 34, "Back-End");
console.log(developer1);
developer1.greeting();


class Junior extends Developer {
    constructor(name, age, type, salary) {
        super(name, age, type);
        this.salary = salary;
    }

    //Polimorfismo 
    greeting() {
        super.greeting();
    }
}

let junior1 = new Junior("Eli", 30, "Frond-End", 1500000);
console.log(junior1);
junior1.greeting(); // Aquí me trae todo el método de los padres 


