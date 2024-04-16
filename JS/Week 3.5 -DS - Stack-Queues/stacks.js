//PILAS (STACKS) -- Son estructuras de datos que siguen el principio LIFO (Last in, First Out), es decir, 
// el último elemento en entrar es el primero en salir. Un ejemplo de este principio es una pila de platos: 
// sólo puede retirarse el que está arriba, que es el último en apilarse. 

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
size(){
    return this.count; 
}
print(){
    console.log(this.stack); 
}
}

const stack = new Stacks(); 
console.log(stack.size()); // 0
console.log(stack.push('John cena')); //{'0': 'John Cena'}
console.log(stack.size()); // 1
console.log(stack.peek()); // John Cena
console.log(stack.push('The Rock')); // {'0': 'John Cena', '1': 'The Rock'}
console.log(stack.size()); // 2
stack.print();             // {'0': 'John Cena', '1': 'The Rock'}
console.log(stack.peek()); // The Rock (porque es el último elemento)
console.log(stack.size());


// Ejemplo 2 

// Se crea un clase para el nodo dentro de la pila 