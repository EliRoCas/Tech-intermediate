// El algoritmo BFS (Breadth First Search) es un algoritmo de búsque no informada utilizado para recorrer o 
// buscar dentro de árboles o grafos. Este algoritmo explora el grafo nivel por nivel de forma recursiva. 
// Se implementa típicamente utilizando una cola para el seguimiento de los nodos a visitar. 

// BFS es muy útil para:
// Encontrar el camino más corto entre dos nodos en un grafo no ponderado.
// Encontrar el camino más corto en un árbol (porque BFS navega a través de la anchura de un árbol nivel por nivel).
// Encontrar la cantidad de componentes conectados en un gráfico no dirigido.
// Resolver problemas de flujo en redes, como el flujo máximo.


// Ejemplo Algoritmo BFS
console.log("Ejemplo grafo con Algoritmo BFS")

// Se crea la clase para el grafo 
class Graph {
    constructor() {
        this.adjList = new Map(); // Mapa para almacenar los nodos y sus vecinos
    }

    // Se crea el método para la creación de cada nodo/vértice 
    addNode(node) {
        this.adjList.set(node, []); // Se añade un nuevo nodo al grafo con una lista vacía de vecinos
    }

    // Se crea el método para la creación de las aristas. En este caso, de forma no dirigida
    addEdge(node, neighbor) {
        this.adjList.get(node).push(neighbor);
        this.adjList.get(neighbor).push(node);
    }

    // Se crea el método del algoritmo BFS que tiene como parámetro el nodo de inicio 
    bfs(startNode) {
        const visited = new Set(); // Se define la variable, que será conjunto para almacenar los nodos visitados
        const queue = [startNode]; // Se define la cola para el BFS, iniciada con el nodo de inicio

        visited.add(startNode); // Se añade el nodo de inicio como visitado

        while (queue.length !== 0) { // Mientras la longitud de la cola no sea 0 
            const current = queue.shift(); // Se elimina el primer valor de la cola y se almacena en "current"
            console.log(current); // Se imprime el nodo actual

            const neighbors = this.adjList.get(current); // Se obtienen los vecinos del nodo actual

            for (const neighbor of neighbors) { // Por cada vecino del nodo actual
                if (!visited.has(neighbor)) { // Si el vecino no ha sido visitado
                    visited.add(neighbor); // Se marca el vecino como visitado
                    queue.push(neighbor); // Se añade el vecino a la cola para explorar sus vecinos
                }
            }
        }
    }
}

// Se instancia la clase
const graph = new Graph();

// Se añaden los nodos al grafo
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

// Se añaden las aristas
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');

// Se ejecuta el algoritmo BFS
graph.bfs('A');


// ---------------------------------------------------------------------------------------------------


// El algoritmo DFS (Depth First Search) es un algoritmo de búsqueda no informada utilizado para recorrer
// o buscar en árboles o gráficos. La idea básica detrás de este algoritmo es seguir explorando el gráfico
// lo más profundamente posible a lo largo de cada rama antes de retroceder. Esencialmente,
// se profundiza tanto como sea posible en cada una de las ramas del gráfico antes de retroceder.

console.log("Ejemplo grafo con Algoritmo DFS")

// Se crea la clase para el grafo 
class GraphDfs {
    constructor() {
        this.adjList = new Map(); // Mapa para almacenar los nodos y sus vecinos
    }

    // Se crea el método para la creación de cada nodo/vértice 
    addNode(node) {
        this.adjList.set(node, []); // Se añade un nuevo nodo al grafo con una lista vacía de vecinos
    }

    // Se crea el método para la creación de las aristas. En este caso, de forma no dirigida
    addEdge(node, neighbor) {
        this.adjList.get(node).push(neighbor);
        this.adjList.get(neighbor).push(node);
    }

    // Se crea el método del algoritmo DFS que tiene como parámetro el nodo de inicio 
    dfs(node, visited = new Set()) {
        console.log(node); // Se imprime el nodo actual
        visited.add(node); // Se marca el nodo actual como visitado

        const neighbors = this.adjList.get(node); // Se obtienen los vecinos del nodo actual

        for (const neighbor of neighbors) { // Por cada vecino del nodo actual
            if (!visited.has(neighbor)) { // Si el vecino no ha sido visitado
                this.dfs(neighbor, visited); // Se llama recursivamente al método DFS para explorar el vecino
            }
        }
    }
}

// Se instancia la clase 
const graphD = new GraphDfs();

// Se añaden los nodos al grafo
graphD.addNode('A');
graphD.addNode('B');
graphD.addNode('C');
graphD.addNode('D');

// Se añaden las aristas
graphD.addEdge('A', 'B');
graphD.addEdge('A', 'C');
graphD.addEdge('B', 'D');

// Se ejecuta el algoritmo DFS
graphD.dfs('A');
