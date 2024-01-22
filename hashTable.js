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
     if(!this.array[index]){
         this.array[index]={}
        } 
        this.array[index][key]=value; 
    
    }
    let myTable = new Hashtable();

 myTable.set("juliana",54)
 myTable.set("juliana",5)
 myTable.set("juliana",544)
 myTable.set("juliana",542)
 console.log(myTable)