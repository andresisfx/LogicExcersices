// Lista 1: 2 -> 4 -> 3 representa el número 342
// Lista 2: 5 -> 6 -> 4 representa el número 465
// La suma es 342 + 465 = 807
// La lista resultante debe ser: 7 -> 0 -> 8

class LinkedList{
  constructor(){
    this.head=null
    
  }
}

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  var lista3 = new LinkedList();
  LinkedList.prototype.add = function(val){
    var node = new ListNode(val)
    var current = this.head
    if(current===null){
        this.head= node
        return
    }
    while(current.next){
        current =  current.next
    }
    
    current.next = node
   
   }
  
  console.log(lista3.add(10));
  console.log(lista3.add(2));
 console.log(lista3)
  
  function addTwoNumbers(l1, l2) {
    let num1=[]
    const num1_l1= l1.next.next.val
    const num2_l1= l1.next.val
    const num3_l1= l1.val
    num1.push(num1_l1,num2_l1,num3_l1)
    let stringNumber =num1.join("")
    const finalNumber1= parseInt(stringNumber)
    let num2=[]
    const num1_l2= l2.next.next.val
    const num2_l2= l2.next.val
    const num3_l2= l2.val
    num2.push(num1_l2,num2_l2,num3_l2)
    let stringNumber2 =num2.join("")
   const finalNumber2= parseInt(stringNumber2)
   console.log(finalNumber2)
   let sum =finalNumber1+finalNumber2
   let  arrList = Array.from(String(sum),Number) 
  
   
   
   for(let i =arrList.length-1;i>=0;i--){
  lista3.add(arrList[i])
      
   }
   return lista3   
  }
  
  // Ejemplo de uso
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const resultado = addTwoNumbers(l1, l2);
  console.log(resultado); // Debería imprimir la lista resultante






  //linked list no class

  function LinkedList2 (){
    this.head=null
  }
 

  function Node2(val){
    this.value=val;
    this.next = null;  
  }

  LinkedList2.prototype.add2= function(val){
    var node = new Node2(val);
    let current = this.head;
    if(current===null){
      this.head=node
      return 
    }
    
    while(current.next) {
      current= current.next 
    }
    current.next= node
  }

  const myList2 = new LinkedList2()
  console.log(myList2.add2(6));
  console.log(myList2.add2(7));
  console.log(myList2.add2(7))
console.log(myList2)

  function LinkedListDel (){
    this.head= null;
  }

  function Node3 (val){
    this.value=val;
    this.next= null
  }
  LinkedListDel.prototype.add= function(val){
    var node = new Node3(val);
    let current = this.head;
    if(current===null){
      this.head=node
      return 
    }
    
    while(current.next) {
      current= current.next 
    }
    current.next= node
  }

  LinkedListDel.prototype.delete= function(val){
    
    let current = this.head

    if(!current){
      console.log("empty list")
      return
    }
    if(current.value===val){
      this.head=null
      return 
    }
    while(current.next&&current.next.value!==val){
      current=current.next
    }
    if(current.next){
      current.next=current.next.next
    }
    

  }
  LinkedListDel.prototype.search=function(val){
    let current = this.head;
    let node= 1
    if(this.head===null){
      console.log("empty list")
      return null
    }
    if(current.value===val){
      console.log("value found in node 1")
      return 1
    }
    while(current.next&&current.next.value!==val   ){
     node++
      current = current.next
    }
    console.log(node)
    if (current.next) {
      node++;
      console.log("value found in node", node+1);// add 1 since we are in current node and the value is in current.next "next node"
  } else {
      console.log("value not found in the list");
      return null;
  }
  
  
  return node+1;
  }

  const verifyEven = (value)=>{
    if(value%2===0){
      return true
    }else{
      return false
    }
  }
  LinkedListDel.prototype.search=function(val){
    let current = this.head;
    let indexNode=1
    let resultMessage="value not found"
    while(current){
      if(typeof val!=="function"){
        if(current.value===val){
          
          resultMessage=current.value+ ' was founded in node '+ (indexNode)
         
        }
        
        indexNode++
       
      }
      if(typeof val=== 'function'){
        if(val(current.value)){
          resultMessage="the value in node "+indexNode+" is true"
        }else{
          resultMessage="the value in node "+indexNode+" is false"
        }
        indexNode++
        }
      
      current=current.next
    }
    console.log(resultMessage)
  }

let myList = new LinkedListDel()
myList.add(8)
myList.add(121)
myList.add(10)
myList.add(5)
myList.add(7)
myList.add(3)
myList.add(20)
console.log(myList)
myList.delete(14)
console.log(myList)
myList.search(verifyEven) 
console.log(myList)
