 function Hashtable (){
    this.array= [];
    this.buckets=35
 }

 Hashtable.prototype.hash= function(key){
    let hash=0

    for(let i=0;i<key.length;i++){
     hash += key.charCodeAt(i)
    }
    console.log(hash)
    return hash%this.buckets
 }

 
 
 Hashtable.prototype.set= function(key,value){
     let index = this.hash(key);
    
     if(typeof key!=="string")throw TypeError("value must be string")
     if(!this.array[index]) this.array[index]=[]
        
     if (!this.array[index]) {
        // Si la clave no existe, crear un array para la clave
        this.array[index][key] = [];
    }

    // Agregar el nuevo valor al array asociado con la clave
    this.array[index].push([key,value]);
    
    }
    Hashtable.prototype.get=function(key){
      let index = this.hash(key)
      if(!this.array[index])return "value not found"
      let valuesArr= this.array[index].map((arr)=>{if(arr[0]===key){return arr}})
      console.log(valuesArr)
      return valuesArr
     }

   Hashtable.prototype.hashKey=function(key){
      let index = this.hash(key);
      if(!this.array[index])return console.log("value not found")
      let comprove= this.array[index].map((el)=>{if(el[0]===key){return true}else{return false}})

      console.log(comprove[0])
      return comprove
   }
    let myTable = new Hashtable();

 myTable.set("juliana",54)
 myTable.set("juan",5)
 myTable.set("julia",544)
 myTable.set("juliana",542)
 myTable.set("juliana",54)
 myTable.set("auan",52)
 myTable.set("juliana",542)
 myTable.get("juanmkkkn")
 myTable.hashKey("juan")
 
 console.log(myTable.hashKey("juliana"))


 class HashTable1{
    constructor (size=50){
      this.keyMap=new Array(size)
    }

    _hashKey(key){
      let total=0;
      const PRIME =31;
      for(let i=0;i<(Math.min(key.length,100));i++){
         const char=key[i]
         const value=char.charCodeAt(0)-96;
         total=(total*PRIME+value) % this.keyMap.length;
      }
      return total;
    }
 }