class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.speed = 0; // No se define arriba en el constructor, porque será un parámetro del método
    }

    Run(speed) {
        this.speed = speed;
        console.log(`${this.name} corre a una velocidad ${this.speed}`);
    }

    Stop() {
        this.speed = 0;
        console.log(`${this.name}, se ha quedado quieto`);
    }

};

class SmallRabbit extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    Hide() {
        console.log(`${this.name} se está escondiendo`);
    }
}

let a = new Animal("Dante", 4)
a.Run(10);


let rabbit = new SmallRabbit("Ñao", 3, "black");
//console.log(SmallRabbit)
rabbit.Run(65);
rabbit.Stop();
rabbit.Hide();