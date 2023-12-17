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
    console.log(current)
    current.next = node
   
   }
  
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
  