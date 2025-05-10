//* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//* You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

//* Example 1:


//* Input: l1 = [2,4,3], l2 = [5,6,4]
//* Output: [7,0,8]
//* Explanation: 342 + 465 = 807.
//* Example 2:

//* Input: l1 = [0], l2 = [0]
//* Output: [0]
//* Example 3:

// *Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//* Output: [8,9,9,9,0,0,0,1]





//**
 //* Definition for singly-linked list.
 //* function ListNode(val, next) {
 //*     this.val = (val===undefined ? 0 : val)
 //*     this.next = (next===undefined ? null : next)
 //* }
 //*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1arr=[]
    let l2arr=[]
    
    let current1=l1
    let current2 =l2
    while(current1!==null){
          l1arr.push(current1.val)
          current1=current1.next
    }
    while(current2!==null){
        l2arr.push(current2.val);
        current2=current2.next
    }
   const num1= l1arr.reverse().join("")
  const num2= l2arr.reverse().join("")
  const sum= Number(num1)+Number(num2)
  const result = sum.toString().split("").map(Number).reverse()
   
   let dummyHead= new ListNode(0)
   let current =dummyHead;
   for(let i=0; i<result.length;i++){
    current.next=new ListNode(result[i])
    current=current.next
   }
   const finalList= dummyHead.next
   return finalList
}