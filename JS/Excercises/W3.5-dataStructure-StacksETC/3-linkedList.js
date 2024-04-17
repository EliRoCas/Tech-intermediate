// Clase que representa un nodo en la lista enlazada
class Node {
    constructor(value) {
        this.value = value; // Valor almacenado en el nodo
        this.next = null; // Enlace al siguiente nodo, inicialmente null
    }
}

// Clase que representa la lista enlazada
class LinkedList {
    constructor() {
        this.head = null; // Referencia al primer nodo de la lista, inicialmente null
    }

    // Método para agregar un nuevo nodo al final de la lista
    addLast(value) {
        const newNode = new Node(value); // Crear un nuevo nodo con el valor proporcionado
        if (!this.head) {
            // Si la lista está vacía, el nuevo nodo se convierte en la cabeza
            this.head = newNode;
        } else {
            // Si la lista no está vacía, recorre la lista hasta el último nodo
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // Enlaza el último nodo con el nuevo nodo
            currentNode.next = newNode;
        }
    }

    // Método para imprimir los valores de la lista enlazada
    printList() {
        let currentNode = this.head; // Comienza desde la cabeza de la lista
        while (currentNode) {
            console.log(currentNode.value); // Imprime el valor del nodo actual
            currentNode = currentNode.next; // Avanza al siguiente nodo
        }
    }
}

// Crear una nueva lista enlazada
const linkedList = new LinkedList();

// Agregar los elementos "Dante", "Triz", "Edw" y "Eli" a la lista
linkedList.addLast("Dante");
linkedList.addLast("Triz");
linkedList.addLast("Edw");
linkedList.addLast("Eli");

// Imprimir los valores de la lista enlazada
linkedList.printList();
