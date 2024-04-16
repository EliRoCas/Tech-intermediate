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