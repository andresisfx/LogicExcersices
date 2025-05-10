
class  Nodo {
    constructor(value){
     this.value=value;
     this.next=null;
     this.prev=null
    }
 }
 
 class DoubleLinkedList {
     constructor(){
         this.head=null;
         this.tail=null;
         this.length=0
     }
 
     //contart la cantidad de elementos de la lista
     count (){
        console.log(`la cantidad de elementos de la lista es ${this.length}`)
         return this.length
     }
     //Mostrar el elemento que hay en una posición concreta de la lista.
     getElementByPosition(position){
         if(position<0 || position>this.length){
             console.log("posicion fuera de rango")
            return null;
         } 
         let current =this.head;
         for(let i=0; i<position;i++){
             current= current.next
         }
         console.log("el elmento en la posicion "+position+" es "+current.value)
         return current.value
     
     }
     //Comprobar si un elemento está en la lista.
     containsValue(value){
         let current =this.head;
         while(current){
             if(current.value===value) {
                 console.log("el elmento "+value+" esta en la lista")
                return true
             }
             current=current.next
         }
         console.log("el elmento "+value+" no esta en la lista")
         return false
     }
     
     printElemnts(){
        
        if(!this.head){
            console.log( "la lista está vacia")
             return
            }
         let current =this.head;
         let result ="";
         
         while(current){
            
                result+=`${current.value} <-> `
                
                current = current.next
       
         }
         
         console.log("imprimiendo elementos: ",result)
         return result
         
     }

     //Insertar un elemento nuevo.
     insert(element){
        
          const newNode = new Nodo(element);
          
          if(!this.head) {
            this.head =this.tail=newNode;
            }else{
                this.tail.next=newNode;
                newNode.prev=this.tail;
                this.tail=newNode

            }
            this.length++
            
           console.log(`elemento ${element} insertado en la posición ${this.length}`)
          
     }

     //Sacar un elemento concreto de la lista.
     removeElement(element){
        if(!this.head) return "la lista esta vacia"
         let current= this.head;
         while(current){
            if(current.value===element){
               if(current.prev) current.prev.next=current.next;
               if(current.next) current.next.prev=current.prev;
               if(current===this.head)this.head=current.next;
               if(current===this.tail)this.tail=current.prev;
               this.length--;
               console.log(`elemento ${element} eliminado de la posicion ${this.length}`)
               console.log(`la lista actualizada es:  ${this.printElemnts()}`)
               return 
            }
            if(current.next===null){
                console.log("elemento no encontrado")
                return 
            }
            current=current.next
            
         }

     }

     removeItemByposition(position){
       if(position<0||position>this.length){
           console.log("removeItemByPosition: posicion fuera de rango")
           return null
       }
            let current=this.head;
            for(let i=1;i<position;i++){
                current=current.next
            }
            if(current.prev)current.prev.next=current.next;
            if(current.next)current.next.prev=current.prev;
            if(current===this.head)this.head=current.next;
            if(current===this.tail)this.tail=current.prev;
            this.length--;
            console.log(`Ejecutando -->removeItemByPosition:  elemento ${current.value} eliminado de la posicion ${position}`)
            console.log(`la lista actualizada es:  ${this.printElemnts()}`)
       };

       concatenateLists(list2){
           if(!list2.head){
            console.log(`Ejecutando concatenateLists: la lista ${list2} esta vacia`)
            return
           }
           if(!this.head){
            this.head=list2.head;
            this.tail=list2.tail;
            this.length=list2.length;
           }else{
            this.tail.next=list2.head; 
            list2.head.prev=this.tail;
            this.tail=list2.tail;
            this.length+=list2.length;
           }
           console.log(`Ejecutando concatenateLists: la lista actualizada es:  ${this.printElemnts()}`)
       }
       replaceElment(position,element){
           if(position<0||position>this.length){
               console.log("replaceElment: posicion fuera de rango")
               return null
           }
           let current=this.head;
           for(let i =1;i<position;i++){
               current=current.next
           }
           current.value=element
           console.log(`Ejecutando replaceElment:  elemento ${current.value} reemplazado de la posicion ${position}`)
           console.log(`Ejecutando replaceElment:  la lista actualizada es:  ${this.printElemnts()}`)
           
       }




 
 }


 const list = new DoubleLinkedList();
 list.insert(1);
 list.insert(2);
 list.insert(3);
 list.insert(4);
 list.insert(5);
 list.printElemnts();
 list.replaceElment(3,2000000000);
 list.printElemnts();
 list.count();
 list.removeElement(12);
 list.removeItemByposition(1);

 const list2 = new DoubleLinkedList();
 list2.insert(6);
 list2.insert(7);
 list2.insert(8);
 list2.insert(9);
 list2.insert(10);
 list2.printElemnts();
 list2.count();
 list.replaceElment(2,1200000000);
 list.concatenateLists(list2);
console.log(list)