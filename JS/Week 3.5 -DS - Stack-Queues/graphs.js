// GRAFOS - Son una estructura de datos formada por un grupo de nodos y ciertas conexiones entre esos nodos. 
// A diferencia de los árboles, no tienen nodos raíz ni nodos hojas, ni cabeza ni cola. 
// Representan relaciones entre diferentes entidades y pueden ser dirigidos o no dirigidos. 

// Características de los grafos:
// Nodos (Vértices): Los nodos son los elementos que se conectan mediante aristas. Cada nodo puede representar 
// un objeto o entidad.
// Aristas (Enlaces): Las aristas son las conexiones entre los nodos. Pueden ser dirigidas o no dirigidas.
// Pesos: Las aristas pueden tener un peso asociado, que puede representar una distancia, costo, tiempo, 
// entre otros valores. Según este peso, se pueden tener grafos ponderados (cuando hay peso asignado)
// o no ponderados (cuando no hay peso asignado)
// Grafo dirigido: las aristas tienen dirección (de un nodo a otro).
// Grafo no dirigido: las aristas no tienen dirección; es decir, la relación entre nodos es bidireccional.
// Conexiones: Los grafos pueden ser conectados (hay un camino entre todos los nodos) o desconectados (existen 
//     nodos aislados).
// Ciclos: Los grafos pueden contener ciclos, que son rutas que comienzan y terminan en el mismo nodo.

// Utilidades 
// Redes Sociales, Mapas, Geolocalización 

// Cómo representar los grafos 
// Método 1 - Matriz de adyacencia: Una estructura bidimensional que representa los nodos en nuestro grafo y las 
// conexiones entre ellos. Lo que permite crear una matriz como una WebTransportBidirectionalStream, donde las
// filas y las columnas representas los nodos de nuestro grafo, y el valor de las celdas, las conexciones entre
// los nodos. Si la celda es 1, hay una conexión entre la fila y la columna; si es 0 no la hay. 
// Tomando como ejemplo un grafo que se conecta A con B y C ; B con D y A; C con A y D; D con C y B 

// [
//     [0, 1, 1, 0]
//     [1, 0, 0, 1]
//     [1, 0, 0, 1]
//     [0, 1, 1, 0]
// ]

// Método 2 - Lista de adyacencia: Una estructura de pares clave-visualViewport, dondde las claves representan
// cada nodo en nuestro grafo y los valores son las conexiones que tiene ese nodo en particular
// Usando el mismo ejemplo anterior, se vería así 
// {
//     A: ["B", "C"],
//     B: ["A", "D"],
//     C: ["A", "D"],
//     D: ["B", "C"],
// }

// ---------------------------------------------------------------------------------------------------------// 

// Ejemplo 1
console.log("Grafos - Ejercicio 1");

// Se crea una clase para el Grafo 
class Graphs {
    // Sólo se maneja una propiedad que es, en este caso, la lista de adyacencia
    constructor() {
        this.adjacencyList = {};
    }

    // Se crea la función o método para el agregar las vértices (apex), que va a tomar el valor del nodo 
    // como parámetro y lo agrega como clave de la lista 
    addApex(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    // Se crea una función para adicionar aristas (edge), que toma dos nodos como parámetros
    // y agrega cada nodo a la matriz de conexiones
    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2); // Se le indica la dirección de la conexión entre nodos
        this.adjacencyList[node2].push(node1); // Como es bidireccional, el grafo será no dirigido
    }

    // Se crea otra función para adicionar aristas (edge), pero que cree nodos dirigidos. Toma los mísmos 
    addEdge2(node1, node2) {
        this.addApex(node1);
        this.addApex(node2);
        this.adjacencyList[node1].push(node2); // Aunque toma dos parámetros, aquí se le indica la dirección 
        // unica en la que pueden conectarse. 
    }
}

// Instanciamos la clase para crear la lista adyacente 
const list = new Graphs();

// Se agregan los vértices 
list.addApex("A");
list.addApex("B");
list.addApex("C");
list.addApex("D");
list.addApex("E");
list.addApex("F");

// Se agregan las arístas (Es decir, se le dice cómo serán las conexiones entre los elementos - vértices - del 
// grafo) En una forma no dirigida 
list.addEdge("A", "B");
list.addEdge("A", "C");
list.addEdge("C", "D");
list.addEdge("D", "E");

console.log("Grafo no dirigido", list);

const list2 = new Graphs();
// Se agregan las aristas para un grafo dirigido 
list2.addEdge2("A", "B"); // A conecta con el nodo B
list2.addEdge2("A", "C");  // A conecta con el nodo C
list2.addEdge2("B", "D"); // B conecta con el nodo D 
list2.addEdge2("C", "D"); // C conecta con el nodo D
list2.addEdge2("D", "E"); // D conecta con el nodo E

console.log("Grafo dirigido", list2);

const list3 = new Graphs();
list3.addEdge2("A", "B");
list3.addEdge2("B", "C");
list3.addEdge2("C", "E");
list3.addEdge2("E", "F");
list3.addEdge2("E", "D");
list3.addEdge2("D", "B");

console.log("Grafo dirigido ejemplo página", list3);


// --------------------------------------------------------------------------------------------// 
// Ejemplo 2
console.log("Grafos - Ejemplo 2 - Utilizando prototipos");

// Se crea la función para los Grafos
function GraphsII() {
    this.addList = {}; // Se crea el objeto que almacenará la lista adyacente
}

// Se crea la función para adicionar vértices, en el ejemplo anterior se usó el denominador "nodo" para los vertices
GraphsII.prototype.addVertex = function (vertex) {
    if (!this.addList[vertex]) { // Se valida que el vértice no exitan en la lista de adyacencia para crearlo
        this.addList[vertex] = [];
    }
};

// Se crea la función para agregar aristas, en una forma no dirigida 
GraphsII.prototype.addEdge = function (vertex1, vertex2) {
    this.addList[vertex1].push(vertex2);
    this.addList[vertex2].push(vertex1);
};

// Se crea un nuevo grafo 
const graphII = new GraphsII();
graphII.addVertex('A');
graphII.addVertex('B');
graphII.addEdge('A', 'B');
console.log(graphII.addList);


// Ejemplo 3 -- Algoritmo DFS 
console.log("Grafos utilizando el algoritmo DFS");

// Se crea la función para realizar un recorrido DFS recursivo
GraphsII.prototype.dsfRecursive = function (vertex, visited = {}) {
    if (!vertex || visited[vertex]) return; // Se valida si el vértice no existe o ya ha sido visitado, para retornar
    visited[vertex] = true; // Se marca el vértice como visitado
    console.log(vertex); // Se imprime el vértice visitado 
    if (this.addList[vertex]) { // Se valida si el vértice existe en la lista de adyacencia 
        this.addList[vertex].forEach(neighbor => { // Se determina, con el forEach cada "vecino"/neighbor del
            // vertice actual
            if (!visited[neighbor]) { // Se hace una nueva validación para saber si el neighbor ha sido visitado
                this.dsfRecursive(neighbor, visited); // Si ya lo fue, se llama recursivamente la función para 
                // continuar con el proceso. 
            }
        });
    }
}


// Se instancia la clase 
const graphIII = new GraphsII();

//Se utiliza el método DFS
graphIII.dsfRecursive("A");
graphIII.dsfRecursive("B");
graphIII.dsfRecursive("C");
graphIII.dsfRecursive("a");


