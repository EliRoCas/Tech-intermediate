// HERENCIA

class Vehicle {
    constructor(marca, color, modelo, tipoCombustible, numRuedas, estado, cantidaPasajeros, cilindraje) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.tipoCombustible = tipoCombustible;
        this.numRuedas = numRuedas;
        this.estado = estado;
        this.cantidaPasajeros = cantidaPasajeros;
        this.cilindraje = cilindraje;
    }
    arrancar() {
        console.log("El vehículo arrancó") // esto es un método propio de la clase vehicle 
    }
};

class Car extends Vehicle { // para indicar que está heredando, se usa la palabra "extends"
    constructor(
        marca, color, modelo, tipoCombustible, numRuedas, estado, cantidaPasajeros, cilindraje, nPuertas
    ) { // como es clase heredada, debo agregar los atributos del padre 
        super(marca, color, modelo, tipoCombustible, numRuedas, estado, cantidaPasajeros, cilindraje)
        // aquí, con la palabra reservada "super", le estoy indiando que vamos a usar del padre, esos atributos
        this.nPuertas = nPuertas // como nPuertas es exclusivo de mi clase car, lo llamo con el this
    }

    abrirBaul() { // este es un método propio de carro, aunque también puede heredar el método del padre
        console.log("Se está abriendo el baúl");
    }
}

const ford = new Car("Scape", "black", 2024, "diesel", 4, "nuevo", 5, 2400, 4);
console.log(ford);
ford.arrancar();
ford.abrirBaul();


// --------------------------------------------------------------------------------------------// 
// POLIMORFISMO -- consiste en diseñar objetos para compartir comportamientos, lo que permite procesar 
// objetos de diferentes maneras. 
// Es la capacidad de presentar la misma interfaz para diferentes formas subyacentes o tipos de datos. 

// Permite que el mismo método ejecute diferentes comportamientos de dos formas: 
// - anulación de método 
// - sobrecarga de método 

