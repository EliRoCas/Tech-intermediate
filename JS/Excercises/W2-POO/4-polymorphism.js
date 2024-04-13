// Ejercicio 10 - HERENCIA Y POLIMORFISMO - Con lógica 

class Car {
    constructor(type, displacement, brand, passagers) {
        this.type = type;
        this.displacement = displacement;
        this.brand = brand;
        this.passagers = passagers;
    }

    SOAT() {
        console.log(`${this.type} tien el SOAT vigente`)
    }
}

class Motorcycle extends Car {
    constructor(type, displacement, brand, passagers, chargeCapacity) {
        super(type, displacement, brand, passagers);
        this.chargeCapacity = chargeCapacity;
    }
    SOAT() {
        super.SOAT();
        const calculateSOAT = () => { // Se crea esta contante, para aplicar el condicional if ks
            if (this.displacement < 100) {
                console.log(`Este año, 2024, el valor pagado fue de 230200`);
            } else if (this.displacement >= 100 && this.displacement < 200) {
                console.log(`Este año, 2024, el valor pagado fue de 308500`)
            } else if (this.displacement > 200) {
                console.log(`Este año, 2024, el valor pagado fue de 830100`)
            }
        };
        calculateSOAT();
    }
}

let gn125 = new Motorcycle("Gasolina", 124, "Suzuki", "200kg");
console.log(gn125);
gn125.SOAT();

let vstrom = new Motorcycle("Gasolina", 650, "Suzuki", "400 kg");
console.log(vstrom);
vstrom.SOAT();

let vogue = new Motorcycle("Híbrida", 250, "AKT", "250kg");
console.log(vogue);
vogue.SOAT();