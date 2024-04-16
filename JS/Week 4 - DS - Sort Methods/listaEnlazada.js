// crear una clase nodo para cada nodo en la lista 

class Node {
    //cada nodo tiene dos propiedades, el valor y el puntero que indica el nodo que sigue
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// creamos una clase para la lista enlazada 

class listaEnlazada {
    //lleva 3 propiedades: el encabezado, la cola y el tamaño 
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // método push va a tomar un valor como parámetro y lo asigna al final de la lista enlazada

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this
    }
}

// instanciar 

const lista = new listaEnlazada(); 
lista.push