// ¿Qué es un árbol binario?
// Un árbol binario es una estructura de datos jerárquica en la que cada nodo tiene como máximo dos hijos, llamados hijo izquierdo y hijo derecho. El nodo superior se llama raíz, y los nodos sin hijos se llaman hojas.

// Características principales:
// Nodos:

// Cada nodo tiene un valor (o dato) y puede tener hasta dos hijos (izquierdo y derecho).

// Raíz:

// El nodo superior del árbol, desde donde comienza la estructura.

// Hojas:

// Nodos que no tienen hijos.

// Recorridos:

// Existen varias formas de recorrer un árbol binario, como inorden, preorden y postorden.

// Aplicaciones:

// Los árboles binarios se usan en muchas aplicaciones, como:

// Árboles de búsqueda binaria (BST).

// Montículos (heaps).

// Expresiones aritméticas.

// Estructuras de datos avanzadas como AVL o árboles rojo-negro.



class Nodo {
    constructor(valor){
      this.valor=valor;
      this.izquerdo=null;
      this.derecho=null;
    }
}

class ArbolBinario {
     constructor (){
        
        this.raiz=null;
     }

     insertarValorenArbol=(valor)=>{
        const nuevoNodo =new Nodo(valor)
        if(!this.raiz){
            this.raiz=nuevoNodo
        }else{
            this.insertarNodo(this.raiz,nuevoNodo)
        }
     }

     insertarNodo=(nodo, nuevonodo)=>{
        if(nuevonodo.valor===nodo.valor){
            console.log("Este valor ya existe")
         return 
        }   
        if(nuevonodo.valor<nodo.valor){
            if(!nodo.izquerdo){
                nodo.izquerdo=nuevonodo
            }else{
                this.insertarNodo(nodo.izquerdo,nuevonodo)
            }
        }else{
            if(!nodo.derecho){
                nodo.derecho=nuevonodo;
            }else{
                this.insertarNodo(nodo.derecho,nuevonodo)
            }
        }
        
     }
}
     


const miArbol=new ArbolBinario()
miArbol.insertarValorenArbol(15)
miArbol.insertarValorenArbol(16)
miArbol.insertarValorenArbol(17)
miArbol.insertarValorenArbol(18)
miArbol.insertarValorenArbol(14)
miArbol.insertarValorenArbol(13)
miArbol.insertarValorenArbol(11)
miArbol.insertarValorenArbol(12)
console.log(miArbol)