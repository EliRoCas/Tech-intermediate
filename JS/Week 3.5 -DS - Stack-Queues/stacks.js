//PILAS (STACKS) -- Son estructuras de datos que siguen el principio LIFO (Last in, First Out), es decir, 
// el último elemento en entrar es el primero en salir. Un ejemplo de este principio es una pila de platos: 
// sólo puede retirarse el que está arriba, que es el último en apilarse. 

// Siempre se apilan items por el comienzo de la lista 
// Se desapilan items por el comienzo de la lista tambbién
// Son operaciones inmediatas 

//OPERACIONES COMUNES 
// push(elemento): Añade un elemento a la parte superior de la pila.
// pop(): Elimina el elemento superior de la pila y lo devuelve.
// peek(): Devuelve el elemento superior de la pila sin eliminarlo.
// size(): Retorna el número de elementos que contiene la pila. 
// print: Muestra el contenido de la pila
// isEmpty(): Devuelve true si la pila está vacía, de lo contrario false.


//NODO -- Siempre tendremos un nodo que va a representar un elemento de la pila a implementar. 
// Este nodo TIENE UN DATO (que puede ser cualquier tipo) Y UN APUNTADOR (otro nodo que está debajo 
// del que ya está en la pila) 


// Pila usando un arreglo 
class Stacks {
    constructor() {
        this.stack = {}; // Objeto a llenarse
        this.count = 0; // contador 
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    pop() {
        this.count--;
        const element = this.stack[this.count.count];
        delete this.stack[this.count];
        return element;
    }
    peek() {
        return this.stack[this.count - 1];
    }
    size() {
        return this.count;
    }
    print() {
        console.log(this.stack);
    }
}

const stackI = new Stacks();
console.log(stackI.size()); // 0
console.log(stackI.push('John cena')); //{'0': 'John Cena'}
console.log(stackI.size()); // 1
console.log(stackI.peek()); // John Cena
console.log(stackI.push('The Rock')); // {'0': 'John Cena', '1': 'The Rock'}
console.log(stackI.size()); // 2
stackI.print();             // {'0': 'John Cena', '1': 'The Rock'}
console.log(stackI.peek()); // The Rock (porque es el último elemento)
console.log(stackI.size());

// ------------------------------------------------------------------

// Ejemplo 2 

// Se crea una clase para cada nodo dentro de la pila
class Node {
    // El constructor define las propiedades de cada nodo
    constructor(value) {
        // `value` representa el valor almacenado en el nodo
        this.value = value;
        // `next` es una referencia al siguiente nodo en la pila, inicialmente es `null`
        this.next = null;
    }
}

// Se crea la clase para la pila (stack), que tendrá 3 propiedades
class Stack {
    // El constructor inicializa las 3 propiedades de la pila
    constructor() {
        // `first` es una referencia al primer nodo (cima) de la pila
        this.first = null;
        // `last` es una referencia al último nodo (base) de la pila
        this.last = null;
        // `size` representa el número de elementos en la pila
        this.size = 0;
    }

    // Retorna el último elemento de la pila, sin eliminarlo
    peek() {
        return this.first;
    }

    // Método para insertar un nuevo valor en la pila (operación push)
    push(val) {
        // Crear un nuevo nodo con el valor dado
        let newNode = new Node(val);

        // Si la pila está vacía (no hay nodos)
        if (!this.first) {
            // El nuevo nodo será tanto el primero como el último de la pila
            this.first = newNode;
            this.last = newNode;
        } else {
            // Si la pila no está vacía, insertar el nuevo nodo al inicio
            // Guardar una referencia temporal al primer nodo existente
            // que almacenara la referencia del primer nodo actual de la pila. 
            let temporal = this.first;

            // Se crea un nuevo nodo (newNode) con el valor que se quiere agregar a la pila.
            // Luego, el puntero 'this.first' se actualiza para apuntar a este nuevo nodo. 
            // Ergo, el nuevo nodo se convierte en el primero de la pila
            this.first = newNode;

            // Como la variable 'temporal' almacena la referencia al primer nodo anterior de la pila, 
            // el siguiente nodo (next) del nuevo nodo (this.first) se asigna a temporal. 
            // Así, el siguiente nodo del nuevo nodo es el nodo temporal
            this.first.next = temporal;
        }
        // Incrementar el tamaño de la pila y devolverlo
        return ++this.size;
    }

    // Método para eliminar el último elemento de la pila (operación pop)
    pop() {
        // Si la pila está vacía, no hay nada que eliminar, así que retornar `null`
        if (!this.first) {
            return null;
        }
        // Guardar una referencia temporal al primer nodo de la pila 
        // que almacenara la referencia del primer nodo actual de la pila. 
        let temporal = this.first;
        // Si el primer nodo es también el último, significa que la pila tiene solo un elemento
        if (this.first === this.last) {
            // Por lo tanto, el último nodo se convierte en `null`
            this.last = null;
        }
        // Mover el puntero `first` al siguiente nodo (elimina el nodo actual)
        this.first = this.first.next;
        // Decrementar el tamaño de la pila
        this.size--;
        // Retornar el valor del nodo eliminado
        return temporal.value;
    }
}



const stack = new Stack;
stack.push("data1");
stack.push("data2");
stack.push("data3");
console.log('first', stack.first);
console.log('peek', stack.peek());
console.log('size', stack.size);
console.log('pop', stack.pop());
console.log('size', stack.size);
console.log(stack)
stack.push('Dante');
stack.push('Triz');
stack.push('Edw');
stack.push('Eli');
console.log('size', stack.size);
console.log(stack);


// Ejemplo 3 

class StackItem {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class StackII {
    constructor() {
      this.head = null;
    }
    push(value) {
      const newValue = new StackItem(value, this.head);
      this.head = newValue;
    }
    pop() {
      if (this.head) {
        if (this.head.next) {
          const secondNode = this.head.next;
          this.head = secondNode;
        } else {
          this.head = null;
        }
      }
    }
    print() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }