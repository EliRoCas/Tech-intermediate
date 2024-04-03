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

class animal {
    constructor() {
        this.name = 'Triz';
        this.age = 8;
        this.color = 'gris';
    }
}
class animal1 {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

 const cat = new animal();
 console.log(cat);

 const parrot = new animal ('Cacao', 4, 'verde');
 console.log(parrot);

 const monkey = new animal1 ('Cris', 2, 'negro');
 console.log(monkey);

 const rabbit = new animal1 ('Motas', 1, 'blanco');
 console.log(rabbit);