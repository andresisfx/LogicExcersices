function BinarySearchTree(value) {
    this.root=value;
    this.left=null;
    this.right=null;
 }
 BinarySearchTree.prototype.insert=function(val){
    if(val<this.root){
       if(this.left){
          this.left.insert(val)
       }else{
          this.left= new BinarySearchTree(val)
       }
    }else{
        if(this.right){
             this.right.insert(val)
          }else{
             this.right= new BinarySearchTree(val)
          }
       
    }
   }
    BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
       //in-order left-root-rigth
       //pre-order root-left-rigth
       //post-order left-rigth-root
       if(order==="in-order"){
          if(this.left&&this.left.depthFirstForEach(cb,order));
          cb(this.root);
          if(this.right&&this.left.depthFirstForEach(cb,order));
 
       }
       if(order==="pre-order"){
            cb(this.root);
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));

     }
       if(order==="post-order"){
            if(this.left&&this.left.depthFirstForEach(cb,order));
            if(this.right&&this.left.depthFirstForEach(cb,order));
            cb(this.root);

     }
    }
    BinarySearchTree.prototype.size=function(){
      // if(this.left===null&&this.right===null)return 1;
      // if(this.left!==null&&this.right===null)return 1 +this.left.size();
      // if(this.left===null&&this.right!==null)return 1+this.right.size();
      // if(this.left!==null&&this.right!==null)return 1+this.right.size()+ this.left.size();

      let counter=1
      if(this.left) counter+= this.left.size();
      if(this.right) counter += this.right.size();
      return counter
}
BinarySearchTree.prototype.contain=function(value){
   if(this.value===value)return true
   if(this.value<value){
      if(!this.right)return false
      return this.right.contain(value)
   }else{
      if(!this.left)return false
      return this.left.contain(value)
   }
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,arr=[]){
   if(this.left!==null){
      arr.push(this.left)
   }
   if(this.right!==null){
      arr.push(this.right)
   }
   cb(this.value)
   if(arr.length>0){
      arr.shift().breadthFirstForEach(cb,arr)
   }
}
 
 let myTree = new BinarySearchTree(10)
 myTree.insert(8)
 myTree.insert(11)
 console.log(myTree)



class Nodo{
  constructor(valor){
   this.izquierdo=null;
   this.derecho=null;
   this.value=valor;
  }
}

class ArbolBinario{
   constructor(){
      this.raiz=null
   }

   _insertarValor(valor){
      const nuevoNodo= new Nodo(valor);
     if(!this.raiz){
        this.raiz=nuevoNodo
     }else{
      this._insertarNodo(this.raiz,nuevoNodo)
     }
   }

   _insertarNodo(nodo,nuevoNodo){
      if(valor<nodo.valor){
         if(!nodo.izquierdo){
            nodo.izquierdo=nuevoNodo
         }else{
            this._insertarNodo(nodo.izquierdo,nuevoNodo)
         }
      }else{
         if(!nodo.derecho){
            nodo.derecho=nuevoNodo
         }else{
            this._insertarNodo(nodo.derecho.nuevoNodo)
         }
      }

   }

   _inOrder(nodo=this.raiz,result=[]){
     if(nodo){
      this._inOrder(nodo.izquierdo,result)
      result.push(nodo.value)
      this._inOrder(nodo.derecho,result)
     }
     return result
   }
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
         result.push(nodo.value);
      }
      return result 
   }
   _buscarValor(nodo=this.raiz,valor){
     if(!nodo)return false;
     if(valor===nodo.value)return true;
     return valor<nodo.value?
            this._buscarValor(nodo.izquierdo,valor):
            this._buscarValor(nodo.derecho,valor)

   }

   _eliminar(valor){
     if(!this.raiz)return null
     this._eliminarNodo(this.raiz,valor)
   }
   _eliminarNodo(nodo,valor){
      if(!nodo)return null
      if(valor<nodo.value){
         nodo.izquierdo=this._eliminarNodo(nodo.izquierdo,valor)
      }else if(valor>nodo.value){
         nodo.derecho= this._eliminarNodo(nodo.derecho,valor)
      }else{
         if(!nodo.derecho)nodo=nodo.izquierdo;
         if(!nodo.izquierdo)nodo=nodo.derecho;
      
         const sucesor=this._encontrarMiimo(nodo.derecho)
         nodo.value=sucesor.value;
         this._eliminarNodo(nodo.derecho,sucesor.value)
      }
      return nodo
   }
   _encontrarMiimo(nodo){
     while(nodo.izquierdo)nodo=nodo.izquierdo;
     return nodo
   }

   
}



// serch for  AVL tree &  max heap