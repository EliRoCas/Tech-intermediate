//COLAS - Es una estructura de datos que opera de forma lineal y unidireccional(se agregan elementos de inicio 
// a fin), a partir de un patrón FIFO (firts in, first out). Un ejemplo de esto sería la cola de un supermercado
// El primero en llegar, es el primero en ser atendido y terminar la compra. Es decir, se mantiene el orden.

// Operaciones principales 
// Encolar (enqueue): Agregar un elemento al final de la cola.
// Desencolar (dequeue): Eliminar el primer elemento de la cola.
// Peek(): Retorna el primer elemento de la cola, sin quitarlo de esta 
// size()
// Print()

// Elementos de una cola:
// Frente (front): El primer elemento de la cola (el siguiente en ser desencolado).
// Final (back): El último elemento de la cola (donde se agrega el próximo elemento).

console.log("Ejercicio 1 - Colas");

//Se construye la clase para la Cola
class Queue {
    constructor() {
        this.queue = [];
    }

    // Se crea el método para encolar o agregar elementos al final de la cola
    // En él se llama al elemento que hace parte de la clase "this.queue"
    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    // Se crea el método para eliminar el primer elemento de la cola. 
    // Para ello se usa el shift.
    dequeue() {
        return this.queue.shift();
    }

    // Se llama, con el método peek, al elemento de la cola que ocupe el índice [0]
    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

const queue = new Queue();

queue.enqueue("Dante");
queue.enqueue("Triz");
queue.enqueue("Edw");
queue.enqueue("Eli");

console.log("Elemento al inicio de la cola", queue.peek()); // 'Dante'
console.log("Imprimir la cola", queue.print()); // ['Dante', 'Triz', 'Edw', 'Eli']


console.log("Eliminando", queue.dequeue()); // índice 0 = Dante
console.log("Eliminando", queue.dequeue()); // Nuevo índice = Triz
console.log("Tamaño de la cola", queue.size());
console.log("Imprimir la cola", queue.print()); // ['Edw', 'Eli']



// ----------------------------------

// Ejercicio 2

console.log("Ejercicio 2 - Simulación de una cola de impresión");

// Declaración de la cola
// Se encuentra un arreglo vacío que representa la cola de impresión.
const queueI = [];


// Se declara la función para adicionar elementos, tiene dos argumentos (item = elemento a encolar) y 
// (priority = la prioridad que del elemento). 
// Así, se agregarán los elementos según su prioridad
function enqueue(item, priority) {

    // El objeto "node" representa el nodo en la cola, con tres argumentos
    //data = el valor del elemento - priority = su prioridad - next = el puntero al siguiente nodo 
    let node = {
        data: item,
        priority: priority,
        next: null
    };


    // Se hace una validación
    // Si la cola está vacía, entonces se asigna "node" como el primer elemento 
    if (queueI.length === 0) {
        queueI.head = node;


    } else { // Si no, se recorre la cola
        let current = queueI.head;
        let previous;

        // ("current" = nodo actual - "previous" = nodo anterior) hasta encontrar 
        // la posición donde "node" debe agregarse, según su prioridad.
        while (current && current.priority <= node.priority) {
            previous = current;
            current = current.next;
        }


        // Si no hay un nodo anterior, el nodo se inserta al principio
        if (!previous) {
            node.next = queueI.head;
            queueI.head = node;
        } else {
            // Si hay un nodo anterior, se inserta el nuevo nodo entre `previous` y `current`
            node.next = current;
            previous.next = node;
        }
    }

    // Se incrementa la longitud de la cola, según los elementos agregados
    queueI.length++;
}

function dequeue() {
    let node = queueI.head; // Se guarda el primer nodo en la variable 
    queueI.head = node.next; // Se actualiza el inicio de la cola para apuntar al siguiente nodo
    queueI.length--; // Se decrementa la longitud de la cola
    return node.data; // Se retorna el valor eliminado
}

enqueue('A', 1);
enqueue('B', 2);
enqueue('C', 3);
enqueue('D', 1);
enqueue('E', 5);
console.log(queueI)

// console.log(dequeue()); // A
// console.log(dequeue()); // B
// console.log(dequeue()); // C
// console.log(dequeue()); // D
// console.log(dequeue()); // E



// -----------------------------------------------------------------

// Ejercicio 3  

console.log("Ejercicio 3 - Colas con nodos")

//creamos una clase Node, que representa cada elemento dentro de la cola

class Node {
    // Cada nodo tiene dos propiedades: valor y puntero (este nos indica cuál elemento es el siguiente)
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creamos una clase para la Cola 

class QueueIII {
    constructor() {
        // este tiene tres propiedades, head(first), tail(last), size
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Se hace una función para agregar elemento, que recibe un valor y lo agrega al final de la cola

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }

    // función dequeue para eliminar el valor inicial de la cola (índice 0)

    dequeue() {
        if (!this.head) return null;
        let temporal = this.head;
        if (this.head === this.tail) {
            this.tail = null;
        }
        this.head = this.head.next; // Indica que el siguiente ahora es el primero
        this.size--;
        return temporal.value;
    }
}

const queueIII = new QueueIII;
queueIII.enqueue("primero");
queueIII.enqueue("segundo");
queueIII.enqueue("tercero");
queueIII.enqueue("cuarto");
queueIII.enqueue("quinto");
console.log(queueIII)
console.log(queueIII.head);
console.log(queueIII.tail);
console.log(queueIII.size);
console.log(queueIII.dequeue());
// console.log(queueIII.head);
// console.log(queueIII.tail);
// console.log(queueIII.size);
// console.log(queueIII.dequeue());
// console.log(queueIII.head);
// console.log(queueIII.tail);
// console.log(queueIII.size);
// console.log(queueIII.dequeue());
// console.log(queueIII.head);
// console.log(queueIII.tail);
// console.log(queueIII.size);
// console.log(queueIII.dequeue());
// console.log(queueIII.head);
// console.log(queueIII.tail);
// console.log(queueIII.size);
// console.log(queueIII.dequeue());
