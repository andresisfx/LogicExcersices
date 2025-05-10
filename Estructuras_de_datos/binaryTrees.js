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
    //In-order (izquierda, raíz, derecha)

    _inOrder(nodo=this.raiz,result=[]){
      if(nodo){
        this._inOrder(nodo.izquierdo, result)
        result.push(nodo.value)
        this._inOrder(nodo.derecho,result)
      }
      return result
    }

    // Pre-order (raíz, izquierda, derecha)
    _preOrder(nodo=this.raiz,result=[]){
        if(nodo){
          result.push(nodo.value);
          this._preOrder(nodo.izquierdo,result);
          this._preOrder(nodo.derecho,result);

        }
        return result
    }
    _postOrder(nodo=this.raiz,result=[]){
        if(nodo){
          this._postOrder(nodo.izquierdo,result);
          this._postOrder(nodo.derecho,result);
          result.push(nodo.value)

        }
        return result 
    }


  _eliminar(valor){
     this.raiz=this._eliminarNodo(this.raiz,valor)
  }

  _eliminarNodo(nodo,valor){
    if(!nodo)return null
    if(valor<nodo.value){
       nodo.izquierdo=this._eliminarNodo(nodo.izquierdo,valor)
    }else if(valor>nodo.value){
      nodo.derecho=this._eliminarNodo(nodo.derecho,valor)
    }else{
      //nodo con un hijo además si encuentra un nodo sin hijos (hoja), en este punto se eliminará ya que no habrá ni izquierdo ni derecho y en cualquier caso retornará null
      if(!nodo.izquierdo)return nodo.derecho;
      if(!nodo.derecho)return nodo.izquierdo;
       const sucesor = this._encontrarMinimo(nodo.derecho)
       nodo.value=sucesor.value;
       nodo.derecho=this._eliminarNodo(nodo.derecho,sucesor.value)
    }
    return nodo
  }
   _encontrarMinimo(nodo){
    while(nodo.izquierdo) nodo=nodo.izquierdo
    return nodo
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


console.log("buscando valor ",miArbol.buscarValor(16));
console.log(JSON.stringify(miArbol, null, 2));
console.log("in order\n",miArbol._inOrder());
console.log("PRE-order\n",miArbol._preOrder());
console.log("POST-order\n",miArbol._postOrder());


miArbol._eliminar(15)
console.log("Arbol despues de eliminar nodo 16",JSON.stringify(miArbol, null, 2));
