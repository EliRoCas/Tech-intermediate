// Crear un grafo donde  se relacionen o enlacen los departamentos de Colombia con su ciudad. 
// El grafo debe ser dirigido.

console.log("Grafos - Ejercicio Práctico 1");

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
    // y agrega cada nodo a la matriz de conexiones. Con ella se crean grafos dirigidos 
    addEdge(node1, node2) {
        this.addApex(node1);
        this.addApex(node2);
        this.adjacencyList[node1].push(node2); // Aunque toma dos parámetros, aquí se le indica la dirección 
        // unica en la que pueden conectarse. 
    }
}

// Instanciamos la clase para crear la lista adyacente 
const list = new Graphs();

// Se agregan los vértices 
list.addApex("Depto.", "Amazonas");
list.addApex("Depto.", "Antioquia");
list.addApex("Depto.", "Arauca");
list.addApex("Depto.", "Atlántico");
list.addApex("Depto.", "Caldas");
list.addApex("Depto.", "Casanare");
list.addApex("Depto.", "Risaralda");
list.addApex("Depto.", "Cundinamarca");
list.addApex("Depto.", "Huila");
list.addApex("Depto.", "Quindío");
list.addApex("Capital", "Leticia");
list.addApex("Capital", "Medellín");
list.addApex("Capital", "Araica");
list.addApex("Capital", "Barranquilla");
list.addApex("Capital", "Manizales");
list.addApex("Capital", "Yopal");
list.addApex("Capital", "Pereira");
list.addApex("Capital", "Bogotá");
list.addApex("Capital", "Neiva");
list.addApex("Capital", "Armenia");


// Se agregan las arístas (Es decir, se le dice cómo serán las conexiones entre los elementos - vértices - del 
// grafo) En una forma dirigida (Sólo se establece dirección del departamento a su capital)
list.addEdge("Amazonas", "Leticia");
list.addEdge("Antioquia", "Medellín");
list.addEdge("Arauca", "Arauca");
list.addEdge("Atlántico", "Barranquilla");
list.addEdge("Caldas", "Manizales");
list.addEdge("Casanare", "Yopal");
list.addEdge("Risaralda", "Pereira");
list.addEdge("Cundinamarca", "Bogotá");
list.addEdge("Huila", "Neiva");
list.addEdge("Quindío", "Armenia");

console.log("Grafo dirigido de departamentos y ciudades", list)