class Queue {
    constructor() {
        this.items = [];
    }

    // Encolar (añadir elemento al final de la cola)
    enqueue(element) {
        this.items.push(element);
    }

    // Desencolar (eliminar el primer elemento de la cola)
    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    // Ver el primer elemento de la cola
    front() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    // Ver si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }
}

// Uso de la cola
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.front()); // Muestra "A"
queue.dequeue(); // Elimina "A"
console.log(queue.front()); // Muestra "B"
