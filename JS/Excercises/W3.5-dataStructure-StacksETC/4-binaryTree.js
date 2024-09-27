// Definición de la clase Node
class Node {
    constructor(value) {
        this.value = value; // Valor del nodo (nombre de la persona)
        this.left = null; // Hijo izquierdo
        this.right = null; // Hijo derecho
    }
}

// Definición de la clase BinaryTree
class BinaryTree {
    constructor() {
        this.root = null; // Inicializa la raíz como null
    }

    // Método para insertar un nodo en el árbol
    insert(value, parentValue = null) {
        const newNode = new Node(value); // Crea un nuevo nodo con el valor dado
        
        if (this.root === null) {
            // Si el árbol está vacío, asigna el nuevo nodo como la raíz del árbol
            this.root = newNode;
        } else {
            // Si el árbol no está vacío, busca el nodo padre para insertar el nuevo nodo
            const parentNode = this.searchNode(this.root, parentValue);
            if (parentNode !== null) {
                // Si el nodo padre tiene un hijo izquierdo vacío, inserta el nuevo nodo allí
                if (parentNode.left === null) {
                    parentNode.left = newNode;
                } else if (parentNode.right === null) {
                    // Si el nodo padre tiene un hijo derecho vacío, inserta el nuevo nodo allí
                    parentNode.right = newNode;
                } else {
                    console.log(`El nodo con valor ${parentValue} ya tiene dos hijos.`);
                }
            } else {
                console.log(`No se encontró un nodo con valor ${parentValue}.`);
            }
        }
    }

    // Método para buscar un nodo específico por valor
    searchNode(node, value) {
        if (node === null) return null;
        if (node.value === value) return node;
        let leftSearch = this.searchNode(node.left, value);
        if (leftSearch !== null) return leftSearch;
        return this.searchNode(node.right, value);
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

}

// Crea una nueva instancia de la clase BinaryTree
const tree = new BinaryTree();

// Inserta los nodos en el árbol binario
tree.insert('Eli'); // Raíz del árbol
tree.insert('Dante', 'Eli'); // Hijo izquierdo de Eli
tree.insert('Edu', 'Eli'); // Hijo derecho de Eli
tree.insert('Max', 'Dante'); // Hijo izquierdo de Dante
tree.insert('Zeus', 'Dante'); // Hijo derecho de Dante
tree.insert('Triz', 'Edu'); // Hija izquierda de Edu
tree.insert('Vale', 'Edu'); // Hija derecha de Edu

// Muestra el árbol binario 
console.log(tree);

// Recorrido 
console.log(tree.routeInOrder()); 
