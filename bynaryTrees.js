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



// class Nodo {
//     constructor(valor){
//       this.valor=valor;
//       this.izquerdo=null;
//       this.derecho=null;
//     }
// }

// class ArbolBinario {
//      constructor (){
        
//         this.raiz=null;
//      }

//      insertarValorEnArbol=(valor)=>{
//         const nuevoNodo =new Nodo(valor)
//         if(!this.raiz){
//             this.raiz=nuevoNodo
//         }else{
//             this.insertarNodo(this.raiz,nuevoNodo)
//         }
//      }

//      insertarNodo=(nodo, nuevonodo)=>{
//         if(nuevonodo.valor===nodo.valor){
//             console.log("Este valor ya existe")
//          return 
//         }   
//         if(nuevonodo.valor<nodo.valor){
//             if(!nodo.izquerdo){
//                 nodo.izquerdo=nuevonodo
//             }else{
//                 this.insertarNodo(nodo.izquerdo,nuevonodo)
//             }
//         }else{
//             if(!nodo.derecho){
//                 nodo.derecho=nuevonodo;
//             }else{
//                 this.insertarNodo(nodo.derecho,nuevonodo)
//             }
//         }
        
//      }
// }
     


// const miArbol=new ArbolBinario()
// miArbol.insertarValorEnArbol(15)
// miArbol.insertarValorEnArbol(16)
// miArbol.insertarValorEnArbol(17)
// miArbol.insertarValorEnArbol(18)
// miArbol.insertarValorEnArbol(14)
// miArbol.insertarValorEnArbol(13)
// miArbol.insertarValorEnArbol(11)
// miArbol.insertarValorEnArbol(12)
// console.log(JSON.stringify(miArbol, null, 2));



class Nodo {
    constructor(value){
        this.value=value
        this.izquierdo=null;
        this.derecho=null
    }
}

class ArbolBinario {
  constructor(){
    this.raiz=null
  }

  insertarValorEnArbol(val){
     const nuevoNodo = new Nodo(val)
     if(!this.raiz){
        this.raiz=nuevoNodo
     }else{
        this._insertarNodo(this.raiz,nuevoNodo)
     }
  }
  _insertarNodo(nodoActual,nuevoNodo){
    if(nuevoNodo.value<nodoActual.value){
       if(!nodoActual.izquierdo){
        nodoActual.izquierdo=nuevoNodo
       }else{
        this._insertarNodo( nodoActual.izquierdo,nuevoNodo)
       }
    }else{
        if(!nodoActual.derecho){
            nodoActual.derecho=nuevoNodo
        }else{
            this._insertarNodo(nodoActual.derecho,nuevoNodo)
        }

    }
  }

  buscarValor(valor,nodo=this.raiz){
       if(!nodo) return false;
       if(valor===nodo.value) return true
       return valor<nodo.value?
              this.buscarValor(valor,nodo.izquierdo):
              this.buscarValor(valor,nodo.derecho)


       
  }
}


const miArbol=new ArbolBinario()
miArbol.insertarValorEnArbol(15)
miArbol.insertarValorEnArbol(16)
miArbol.insertarValorEnArbol(17)
miArbol.insertarValorEnArbol(18)
miArbol.insertarValorEnArbol(14)
miArbol.insertarValorEnArbol(13)
miArbol.insertarValorEnArbol(11)
miArbol.insertarValorEnArbol(12)
console.log("buscando valor ",miArbol.buscarValor(16))
console.log(JSON.stringify(miArbol, null, 2));