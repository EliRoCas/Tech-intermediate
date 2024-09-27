// Árbol binario -- Estructura de datos que se utiliza para almacenar datos de una manera jerárquica.
// Está formado por nodos, los cuales pueden tener un máximo de dos hijos y así suscesivamente.
// Los nodos se organizan en niveles, con un nodo raíz en la parte superiro y los hijos a continuación.

// Características de un árbol binario:
// Raíz: El nodo en la parte superior del árbol es conocido como la raíz. No tiene nodos superiores.
// Nodos hijos: Cada nodo puede tener hasta dos nodos hijos. Los nodos en el nivel más bajo se denominan
// hojas y no tienen hijos.
// Izquierda y derecha: Cada nodo puede tener un hijo izquierdo y un hijo derecho. 
// Estos nodos hijos pueden a su vez tener más nodos hijos.
// Altura: La altura de un árbol binario es el número de niveles desde la raíz hasta el nivel más bajo.
// Equilibrio: Un árbol binario está equilibrado si la altura de sus subárboles izquierdo y derecho
// difiere por lo sumo en 1.

// -----------------------------------------------------------------------------------------------------------//

// Ejemplo 1 

console.log("Ejercicio 1 - Árbol binario")

// Se define la clase para el nodo
class Node {
    // Tiene 3 propiedades: el valor "value" (que se pasa como parámetro), izquierda "left" y derecha "right" 
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Se define la clase para el árbol binario, con una propiedad llamada raíz "root"
class binaryTree {
    // Constructor de la clase binaryTree
    constructor() {
        // Inicializa la propiedad root como null, indicando que el árbol está inicialmente vacío
        this.root = null;
    }

    // Método para insertar un valor en el árbol
    insert(val) {
        // Crea un nuevo nodo con el valor dado
        let newNode = new Node(val);
        // Si el árbol está vacío (root es null), asigna el nuevo nodo como raíz del árbol
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Si el árbol no está vacío, llama a la función insertNode para insertar el 
            // nuevo nodo en la posición adecuada
            this.insertNode(this.root, newNode);
        }
    }

    // Método auxiliar para insertar un nuevo nodo en la posición adecuada en el árbol
    // Inserta los nodos en la derecha o la izquierda según la validación. 
    insertNode(node, newNode) {
        // Si el valor del nuevo nodo es menor que el valor del nodo actual, debe insertarse a la izquierda
        if (newNode.value < node.value) {
            // Si el nodo izquierdo está vacío, asigna el nuevo nodo allí
            if (node.left === null) {
                node.left = newNode;
            } else {
                // Si el nodo izquierdo no está vacío, llama recursivamente a insertNode para 
                // seguir buscando la posición adecuada
                this.insertNode(node.left, newNode);
            }
        } else {
            // Si el valor del nuevo nodo es mayor o igual que el valor del nodo actual,
            // debe insertarse a la derecha
            if (node.right === null) { // Si el nodo derecho está vacío, asigna el nuevo nodo allí
                node.right = newNode;
            } else {
                // Si el nodo derecho no está vacío, llama recursivamente a insertNode
                //  para seguir buscando la posición adecuada
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Método para buscar 
    search(value) { // Se indica que la búsqueda comienza desde la raíz e internamente se hace una 
        //búsqueda recursiva con el método "searchNode"
        return this.searchNode(this.root, value);
    }

    //Método para buscar un nodo específico en el árbol
    searchNode(node, value) {
        // Se hace una validación, si el nodo igual a null o el valor del node igual al valor, entonces 
        // se retorna el valor buscado o nodo actual, o null si no se encuentra.
        if (node == null || node.value === value) {
            return node;

            // si no, entonces se hace una nueva validación en la que, si el valor es menor al valor del nodo,
            // se realiza una búsqueda recursiva en el nodo izquierdo y sus valores. 
        } else if (value < node.value) {
            return this.searchNode(node.left, value);

            //si no, entonces se hace una última validación, en la que se llama recursivamente al método 
            // y se hace la búscqueda en el nodo derecho. 
        } else {
            return this.searchNode(node.right, value);
        }
    }

    // Método para Eliminar 
    // Se indica, al igual que en el método de búsqueda, que el proceso comienza desde la raíz e internamente se
    // hace una búsqueda recursiva del método "deleteNode"
    delete(value, node) {
        this.root = this.deleteNode(this.root, value);
        return node;
    }

    //Método para Eliminar un valor específico 
    deleteNode(node, value) {
        // Se hace una primera validación para saber si el nodo actual está vacío. De estarlo se regresa "null"
        if (node === null) {
            return null;

            // si no, se hace una segunda validación, en la que, si el valor es menor al valor del nodo (actual), 
            // se llama recursivamente al método "deleteNode" y se hace la búsqueda en el nodo izquierdo
        } else if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;

            // si no, se hace otra validación en la que, si el valor es mayor al valor del nodo, 
            // se llama recursivamente al método y se hace la búsqueda en el nodo derecho 
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;

            // si no, se hace una nueva validación en la que se determina:        
        } else {
            // 1- Si el nodo no tiene hijos, para eliminar el nodo simplemente. 
            if (node.left === null && node.right === null) {
                return null;

                // 2 - Si sólo el nodo derecho tiene hijos, se retorna este hijo y se conecta con el padre 
            } else if (node.left === null) {
                return node.right;

                // 3 - Si sólo el nodo izquierdo tiene hijos, se retorna el hijo "left" y se conecta con el padre
            } else if (node.right === null) {
                return node.left;

                // 4. Si tiene ambos hijos, se llama a la función "findSuccessor" para hallar: 
            } else {
                // el sucesor del nodo actual (el nodo más pequeño en el subárbol derecho del nodo). 
                const successor = this.findSuccessor(node.right);
                // se reemplaza el valor del nodo actual con el valro del sucesor. 
                node.value = successor.value;
                //   Finalmente, se llama recursivamente al método "deleteNode" para 
                // eliminar al sucesor del subárbol derecho. 
                node.right = this.deleteNode(node.right, successor.value);
                return node;
            }
        }
    }

    // Método para encontrar el sucesor del nodo, que es el de valor más pequeño del subárbol derecho 
    // (node.right, successor.value )
    findSuccessor(node) {
        let successor = node; // se determina la variable sucesor que tomará el valor del nodo

        // Se hace un ciclo "While" donde se indica que, mientras el valor del nodo hijo izquier no sea null, 
        // se buscará en todo el subárbol derecho actualizando los valores de "successor" para que apunte 
        //al nodo hijo de la izquierda. 
        while (successor.left !== null) {
            successor = successor.left;
        }
        // Una vez que el bucle termina, `successor` apunta al nodo con el valor más pequeño
        // en el subárbol derecho del nodo original.
        // Devuelve el nodo `successor` encontrado.
        return successor;
    }

    // Método-Función recorrido en orden que llama a la función recursiva (routeInOrNode)
    routeInOrder() {
        this.routeInOrNode(this.root); // Se le indica que comience por la raíz
    }

    routeInOrNode(node) {
        if (node !== null) { // Si el nodo no está vacío (igual a nulo) entonces se recorre recursivamente las subramas izquierdas y 
            // luego las derechas. 
            this.routeInOrNode(node.left);
            console.log(node.value); // imprimiendo en cada iteración el valor de las llamadas de los hijos izquierdos y derechos
            this.routeInOrNode(node.right);
        }
    }

    // Método para recorrer el nodo en preorden: Nodo actual, luego hijo izquierdo, luego hijo derecho suscesivamente. 
    // Llamando recursivamente al método (routeInPreNode)
    routeInPreorder() {
        this.routeInPreNode(this.root); // Se le indica que comience por la raíz 
    }

    routeInPreNode(node) {
        if (node !== null) { // Se haca una validación, si el nodo no está nulo 
            console.log(node.value); // entonces se imprime el valor del nodo actual 
            this.routeInPreNode(node.left); // Luego se recorre recursivamente la rama izquierda 
            this.routeInPreNode(node.right);// luego recursivamente la derecha. 
        }
    }

    // Método para recorrer el árbol en postorden: Se llaman primero a los hijos izquierdos y derechos, luego se imprime el nodo actual 
    // Todo llamando recursivamente a la función (routeInPostNode)
    routeInPostorder() {
        this.routeInPostNode(this.root);
    }

    routeInPostNode(node) {
        if (node !== null) { // si el nodo no está vacío
            this.routeInPostNode(node.left); // Se realiza el recorrido recursivo por la rama del nodo izquierdo 
            this.routeInPostNode(node.right); // Se realiza el recorrido recursivo por la rama del nodo derecho 
            console.log(node.value); // Se imprime el valor actual
        }
    }

}

const tree = new binaryTree(); // Se crea una nueva instancia de la clase "binaryTree"
tree.insert("D"); // Se inserta el primer elemento, como está vacío, "D" se convierte en la raíz
console.log("Primer elemento agregado", tree);
tree.insert("B"); // Dado que "B" es menor que "D", se inserta el nodo a la izquierda
console.log("Segundo elemento agregado", tree);
tree.insert("C"); // Inserta un nodo hijo a la derecha de B, porque C es mayor que B y 
//el nodo derecho de la raíz ya está lleno
console.log("Tercer elemento agregado", tree);
tree.insert("a");// Dado que "a" es menor que B y menor que D, agrega el nodo a la derecha de la raíz
console.log("cuarto elemento agregado", tree);
tree.insert("A"); // Dado que "A" es menor que B y "Menor" que "D", pero es mayúscula, se inserta como nodo hijo
// a la izquierda de B
console.log("quinto elemento agregado", tree);
tree.insert("c"); // Dado que "c" es mayor que "a" se inserta como nodo hijo, a la derecha de "a"
console.log("sexto elemento agregado", tree);
tree.insert("b"); // Dado que "b" es menor que "D", los nodos anteriores están ocupados y está en minúscula,
// se inserta como hijo a la izquierda de "a".
console.log("séptimo elemento agregado", tree);

// Buscar 
console.log("primera búsqueda", tree.search("A"));
console.log("segunda búsqueda", tree.search("a"));
console.log("tercera búsqueda", tree.search("z"));


// Eliminar 
// tree.delete("elimina b", "b"); // elimina el valor "b"
// tree.delete(); // elimina el menor valor de la raíz
// tree.delete("D"); // elimina el valor de la raíz (D), por lo que el método lo reemplaza 
// // por el nodo del subárbol de la derecha, en este caso "a" 

//Recorrer en Orden
console.log("Recorrer en orden");
console.log(tree.routeInOrder());

//Recorrer en Preorden 
console.log("Recorrer en preorden");
console.log(tree.routeInPreorder());

//Recorrer en Portorden
console.log("Recorrer en postorden");
console.log(tree.routeInPostorder())





class ArbolBinario {

    eliminar(valor) {
        this.raiz = this.eliminarNodo(this.raiz, valor);
    }

    eliminarNodo(nodo, valor) {
        if (nodo === null) {
            return null;
        } else if (valor < nodo.valor) {
            nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, valor);
            return nodo;
        } else if (valor > nodo.valor) {
            nodo.derecho = this.eliminarNodo(nodo.derecho, valor);
            return nodo;
        } else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
                return null;
            } else if (nodo.izquierdo === null) {
                return nodo.derecho;

            } else if (nodo.derecho === null) {
                return nodo.izquierdo;
            } else {
                const sucesor = this.encontrarSucesor(nodo.derecho);
                nodo.valor = sucesor.valor;
                nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.valor);
                return nodo;
            }
        }
    }


    encontrarSucesor(nodo) {
        let sucesor = nodo;
        while (sucesor.izquierdo !== null) {
            sucesor = sucesor.izquierdo;
        }
        return sucesor;
    }
}