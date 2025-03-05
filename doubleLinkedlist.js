// Clase para representar un nodo de la lista
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

// Clase para representar la lista doblemente enlazada
class ListaDobleEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamano = 0;
    }

    // Método para contar los elementos de la lista
    contarElementos() {
        return this.tamano;
    }

    // Método para mostrar el elemento en una posición específica
    obtenerElemento(posicion) {
        if (posicion < 0 || posicion >= this.tamano) return null;
        let actual = this.cabeza;
        for (let i = 0; i < posicion; i++) {
            actual = actual.siguiente;
        }
        return actual.valor;
    }

    // Método para verificar si un elemento está en la lista
    contiene(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor === valor) return true;
            actual = actual.siguiente;
        }
        return false;
    }

    // Método para imprimir la lista
    imprimir() {
        let actual = this.cabeza;
        let resultado = "";
        while (actual) {
            resultado += actual.valor + " <-> ";
            actual = actual.siguiente;
        }
        console.log(resultado + "null");
    }

    // Método para insertar un nuevo elemento
    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
            this.cola = nuevoNodo;
        }
        this.tamano++;
    }

    // Método para eliminar un elemento específico
    eliminar(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor === valor) {
                if (actual.anterior) actual.anterior.siguiente = actual.siguiente;
                if (actual.siguiente) actual.siguiente.anterior = actual.anterior;
                if (actual === this.cabeza) this.cabeza = actual.siguiente;
                if (actual === this.cola) this.cola = actual.anterior;
                this.tamano--;
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    // Método para eliminar el elemento en una posición específica
    eliminarEnPosicion(posicion) {
        if (posicion < 0 || posicion >= this.tamano) return false;
        let actual = this.cabeza;
        for (let i = 0; i < posicion; i++) {
            actual = actual.siguiente;
        }
        return this.eliminar(actual.valor);
    }

    // Método para concatenar otra lista a esta
    concatenar(otraLista) {
        if (!otraLista.cabeza) return;
        if (!this.cabeza) {
            this.cabeza = otraLista.cabeza;
            this.cola = otraLista.cola;
        } else {
            this.cola.siguiente = otraLista.cabeza;
            otraLista.cabeza.anterior = this.cola;
            this.cola = otraLista.cola;
        }
        this.tamano += otraLista.tamano;
    }

    // Método para reemplazar un elemento en una posición específica
    reemplazar(posicion, nuevoValor) {
        if (posicion < 0 || posicion >= this.tamano) return false;
        let actual = this.cabeza;
        for (let i = 0; i < posicion; i++) {
            actual = actual.siguiente;
        }
        actual.valor = nuevoValor;
        return true;
    }
}

// Prueba de la implementación
const lista1 = new ListaDobleEnlazada();
lista1.insertar("A");
lista1.insertar("B");
lista1.insertar("C");
lista1.imprimir(); // A <-> B <-> C <-> null
console.log("Número de elementos:", lista1.contarElementos());
console.log("Elemento en la posición 1:", lista1.obtenerElemento(1));
console.log("¿Contiene 'B'?:", lista1.contiene("B"));
lista1.eliminar("B");
lista1.imprimir(); // A <-> C <-> null
const lista2 = new ListaDobleEnlazada();
lista2.insertar("X");
lista2.insertar("Y");
lista1.concatenar(lista2);
lista1.imprimir(); // A <-> C <-> X <-> Y <-> null
lista1.reemplazar(2, "Z");
lista1.imprimir(); // A <-> C <-> Z <-> Y <-> null
