// Se crea un clase para cada nodo dentro de la pila
class Node {
    //cada nodo tendrá dos propiedades: valor o punturo, último y anterior
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Se crea la clase para la Pila, que tendrá 3 propiedades
class Stack {
    // Se agregan las 3 propiedas de la pila: el primer nodo, el último y el tamaño de la pila
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    //Retorna el último elemento de la pila, sin eliminarlo
    peek() {
        return this.top;
    }
    // Se crea el método push que recibe un valor y lo ingresa a la pila
    // A este método se le agrega el operador de flujo "if" para validar el lugar donde irá el elemento adicionado
    push(val) {
        let newNode = new Node(val);
        if (!this.top) { // si top no tiene valor - 
            this.top = newNode;
            this.bottom = newNode;
        } else { // si tiene valor
            let temporal = this.top;
            this.top = newNode;
            this.top.next = temporal;
        }
        this.size++;
        return this.size; // se aumenta el tamaño de la pila
    }

    // Se crea el método pop que elimina el elemento de la parte superior de la pila.
    // A este método se le agrega una validación
    pop() {
        if (!this.top) {
            return null;
        }; // si to´p no tiene valor
        let temporal = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.size--;
        return temporal.value;
    }
}

// Crear una nueva pila
let pila = new Stack();

// Agregar elementos a la pila
pila.push("Dante");
pila.push("Triz");
pila.push("Edw");
pila.push("Eli");

// Ver el elemento en la parte superior de la pila
console.log("Elemento superior:", pila.peek().value); // Debería mostrar "Eli"

// Eliminar elementos de la pila
console.log("Eliminado:", pila.pop()); // Debería mostrar "Eli"
console.log("Eliminado:", pila.pop()); // Debería mostrar "Edw"

// Ver el elemento en la parte superior de la pila después de eliminar elementos
console.log("Elemento superior:", pila.peek().value); // Debería mostrar "Triz"

// Ver el tamaño de la pila
console.log("Tamaño de la pila:", pila.size); // Debería mostrar 2
