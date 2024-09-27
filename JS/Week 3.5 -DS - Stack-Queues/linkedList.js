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


//------------------------------------------------------------------------------------------

// Ejercicio 2 
console.log("Ejercicio 2 - Lista enlazada única - lista enlazada vinculada");

// Crear una clase nodo para cada nodo en la lista

class NodeII {
    //cada nodo tiene dos propiedades: el valor/data y el puntero que indica el nodo que sigue
    constructor(val) {
        this.val = val;
        this.next = null; //Se deja nulo dado que esta propiedad capturará los datos de nuevos
    }
}

// Creamos una clase para la lista enlazada

class linkedListII {
    //lleva 3 propiedades: el encabezado(head), la cola(tail) y el tamaño(size)
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Método push (en el ejemplo anterior se usaba 'addLast')
    // va a tomar un valor como parámetro y lo asigna al final de la lista enlazada

    push(val) {
        const newNode = new NodeII(val)
        if (!this.head) { // Si head está vacía, entonces tanto head como tail tomarán el valor de 'newNode'
            this.head = newNode;
            this.tail = this.head;
        }
        else { // Si no está vacía, entonces:   
            this.tail.next = newNode; // next tomará el valor de newNode
            this.tail = newNode; // y tail será igual a newNode
        }
        this.size++;
        return this.tail
    }

    // Método para contar la logitud de la lista enlazada 
    numData = () => {
        let count = 0;
        let data = this.head; // Se define que data es = a la cabeza de la lista 
        if (!data) { // se valida si data no está vacía 
            return 0;
        } else { // Si no está vacía, entonces: 
            count = 1; // aumenta el contador 
            while (data.next) { //mientras el nodo "data" tenga un nodo next (data.next)
                data = data.next; // data se actualiza al siguiente nodo,
                count++; // y se incrementa el contador 
            }
        }
        return count++;
    }

    // Método para buscar un dato específico dentro de la lista 
    searchData = (value) => { // Se busca un valor específico (value) en la lista 
        let data = this.head; // Se define que data es = a la cabeza de la lista 
        while (data) { // Se realiza un ciclo while mientras data no sea = a null
            if (data.val === value) { // Se valida, en cada iteración, si el valor del nodo actual (data.val)   
                //es igual al valor buscado (value)
                // Este 'val' se toma del constructor del nodo
                return data; // Si se encuentra el valor
            }
            data = data.next; // Si no es data.value no es = al valor buscado (value) data se mueve al suguiente nodo
        }
        return null; // si el valor no se encuentra
    }

    // Método para eliminar por la cola, en el ejemplo 1 se uso (removeLast)
    pop() {
        if (!this.head) { // Se valida si la lista está vacía
            return undefined;
        }
        let current = this.head; // Inicializa 'current' como el nodo inicial (head) de la lista
        let newTail = current; // Inicializa `newTail` como `current` (servirá para encontrar el nuevo último nodo)
       
       // Se recorre la lista hasta encontrar el último nodo 
        while (current.next) { // Mientras current tenga elementos siguientes 
            newTail = current; // avanza a "newTail" para que apunte al nodo actual
            current = current.next; // avanza 'current' al siguiente nodo
        }

// Una vez que 'current' apunta al último nodo
        this.tail = newTail; // Se establece que la cola será igual a newTail, 
        this.tail.next = null; // y se elimina el enlace al último nodo
        this.size--; // por lo que se decrementa el tamaño de la lista 

        if (this.size === 0) { // Se valida que la lista no sea igua la 0 después de eleiminar el último nodo
            this.head = null;
            this.tail = null;
        }
        return current; // Se retorna el último nodo que fue eliminado
    }

    // Método que invierte el orden de la lista
    reverse (){
        let node = this.head; 
        this.head = this.tail;
        this.tail = node;
        
        let next; 
        let current = null; 
        for(let i = 0; i< this.size; i++){
            next = node.next; 
            node.next = current;
            current = node; 
            node = next; 
        }
        return this;
    }
    
}

// Instanciar y probar el método 

const list = new linkedListII();
list.push('a');
list.push('hola');
list.push('b');
list.push('world');
list.push('c');
console.log(list);
console.log("searchData", list.searchData("b"));
console.log("pop", list.pop());
console.log("Reverse", list.reverse());
