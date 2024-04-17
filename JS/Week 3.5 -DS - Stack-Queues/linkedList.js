//LISTA ENLAZADA - Es una estructura de datos lineal que se compone de nodos, cada uno de los
// de los cuales contiene un valor y una referencia (o enlace) al siguiente nodo de la lista.

//Características de una lista enlazada:
// Nodos: Cada elemento en la lista es un nodo, que contiene un valor y un enlace al siguiente nodo.
// Cabeza: La cabeza es una referencia al primer nodo de la lista.
// Cola: La cola es una referencia al último nodo de la lista.
// Longitud: La longitud indica la cantidad de nodos en la lista.

// Principales métodos:
// Agregar al principio (addFirst): Agrega un nuevo nodo al inicio de la lista.
// Agregar al final (addLast): Agrega un nuevo nodo al final de la lista.
// Eliminar al principio (removeFirst): Elimina el nodo al inicio de la lista.
// Eliminar al final (removeLast): Elimina el nodo al final de la lista.
// Insertar en una posición específica (insertAt): Inserta un nuevo nodo en una posición específica de la lista.
// Eliminar en una posición específica (removeAt): Elimina un nodo de una posición específica de la lista.
// Buscar un valor (find): Busca un valor específico en la lista y retorna el nodo que lo contiene.
// Recorrer la lista (traverse): Permite recorrer los nodos de la lista, 
// generalmente para realizar alguna operación sobre ellos.

// En las listas enlazadas puedo insertar datos por la cabeza o por la cola, cada uno con un código particular


// Ejercicio 1 - Lista enlazada 
// En una lista de enlaces simples, cada nodo solo tiene una referencia al siguiente nodo de la lista. 
console.log("Ejercicio 1 - Lista enlazada única - lista enlazada vinculada");

// Creamos la clase para Nodo - que representa cada elemento de la lista enlazada
class Node {
    // Constructor para crear un nodo con un dato y un puntero al siguiente nodo
    constructor(data) {
        this.data = data; // Almacena los datos en el nodo
        this.next = null; // Inicializa el puntero al siguiente nodo (empieza en null)
    }
}

// Creamos la clase para la Lista Enlazada
class LinkedListI {
    // Constructor que inicia la lista con la cabeza y la cola como null
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Inserción de datos al principio de la lista
    addFirst(data) {
        const newNode = new Node(data); // Crea un nuevo nodo
        newNode.next = this.head; // El puntero del nuevo nodo apunta al nodo actual de la cabeza
        this.head = newNode; // Actualiza la cabeza para que apunte al nuevo nodo
        // Si la cola era null, significa que la lista estaba vacía, así que actualizamos la cola al nuevo nodo
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // Inserción de datos al final de la lista
    addLast(data) {
        const newNode = new Node(data); // Crea un nuevo nodo
        // Si la lista está vacía, asigna el nuevo nodo a la cabeza y la cola
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Si la lista no está vacía, enlaza el último nodo con el nuevo nodo
            this.tail.next = newNode;
            // Actualiza la cola para que apunte al nuevo nodo
            this.tail = newNode;
        }
    }

    // Elimina el primer nodo de la lista
    removeFirst() {
        if (!this.head) { // Si la lista está vacía, no hay nada que eliminar
            return null;
        }
        // Actualiza la cabeza para que apunte al siguiente nodo, eliminando así el primer nodo
        this.head = this.head.next;
        // Si la lista se ha vaciado, actualiza la cola a null
        if (!this.head) {
            this.tail = null;
        }
    }

    // Elimina el último nodo de la lista
    removeLast() {
        if (!this.head) { // Si la lista está vacía, no hay nada que eliminar
            return null;
        }
        // Si hay un solo nodo, elimina ese nodo y actualiza la cabeza y la cola a null
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        // Recorre la lista hasta llegar al nodo anterior al último nodo
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        // Elimina el enlace al último nodo
        current.next = null;
        // Actualiza la cola para que apunte al nodo anterior
        this.tail = current;
    }
}

// Código de prueba
const linkedListI = new LinkedListI();
linkedListI.addFirst("Español");
linkedListI.addFirst("Matemáticas");
linkedListI.addLast("Inglés");
linkedListI.addLast("Biología");

console.log(linkedListI);
console.log("Primero:", linkedListI.head.data);
console.log("Último:", linkedListI.tail.data);

linkedListI.removeLast();
console.log(linkedListI);
console.log("Primero:", linkedListI.head.data);
console.log("Último:", linkedListI.tail.data);


// // crear una clase nodo para cada nodo en la lista

// class Node {
//     //cada nodo tiene dos propiedades, el valor y el puntero que indica el nodo que sigue
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// // creamos una clase para la lista enlazada

// class listaEnlazada {
//     //lleva 3 propiedades: el encabezado, la cola y el tamaño
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     // método push va a tomar un valor como parámetro y lo asigna al final de la lista enlazada

//     push(val) {
//         const newNode = new Node(val)
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//         return this
//     }
// }

// // instanciar

// const lista = new listaEnlazada();
// lista.push