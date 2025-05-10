// encontrar si dos strings son anagramas o no

function isAnagram (s,t){
  if(s.length!==t.length) return false

   counter= new Map()
  for (let i = 0; i < t.length; i++) {
     counter.set(s[i].toLowerCase(),(counter.get(s[i].toLowerCase())||0)+1)
     counter.set(t[i].toLowerCase(),(counter.get(t[i].toLowerCase())||0)-1)
    
  }
  for (let count of counter.values()) {
    if(count!==0)return false
  }
  return true
}
console.log(isAnagram("anagrama","GRAMAANA"))



// sum two numbers 
// encontrar los indices de los dos numero que sumados nos da target


function findIndex(arr,target){
    let seen=[]
    for (let i = 0; i < arr.length; i++) {
        let complement=(target-arr[i])
        if(seen.includes(complement)){
            return  `${arr.indexOf(complement)}, ${arr.indexOf(arr[i])}`
        }else{
            seen.push(arr[i])
        }

    }
}

console.log(findIndex([1,6,2,3,7],9))


// Encontrar si el string es valido segun si es correspondiente con su mismo simbolo (){}[]
// no puede estar (},[).... o un termino solo (),{},[....

function verifyString(s){
  if(s.length%2!==0)return false

  let stack = [];
  const mapping={')':'(','}':'{',']':'['}
  for (const char of s) {
     if(mapping[char]){
      if(stack.pop()!==mapping[char])return false
     }else{
      stack.push(char)
     }
  }
  return stack.length===0;
}

console.log(verifyString("(",")"))

/*21. Fusionar dos listas ordenadas
Fácil
Temas
Compañías
Se le proporcionan los encabezados de dos listas vinculadas ordenadas list1y list2.

Combine las dos listas en una lista ordenada . La lista debe hacerse empalmando los nodos de las dos primeras listas.

Devuelve el encabezado de la lista enlazada fusionada .

 

Ejemplo 1:


Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
 Salida: [1,1,2,3,4,4]
Ejemplo 2:

Entrada: lista1 = [], lista2 = []
 Salida: []
Ejemplo 3:

Entrada: lista1 = [], lista2 = [0]
 Salida: [0]
 

Restricciones:

El número de nodos en ambas listas está en el rango [0, 50].
-100 <= Node.val <= 100
Ambos list1y list2están ordenados en orden no decreciente .*/


 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)


var mergeTwoLists = function(list1, list2) {
    let temp=new ListNode();
    let tail = temp
    while(list1!==null&&list2!==null){
        if(list1.val<list2.val){
            tail.next=list1
            list1=list1.next
        }else{
            tail.next=list2
            list2=list2.next
        }
        tail=tail.next
    }
    if(list1!==null){
        tail.next=list1
    }else if(list2!==null){
        tail.next=list2
        }
        return temp.next
};
 }
//226
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){return null}
    if(!root.left&&!root.right){return root}
  
    let aux=root.right;
    root.right=root.left;
    root.left=aux;
    invertTree(root.right);
    invertTree(root.left);
    return root
  
  
  
  };

  /** 104
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){return 0}
    
    let depth= 1+Math.max(maxDepth(root.left),maxDepth(root.right))
    return depth
    };

  /** 100
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p&&!q)return true
    if(!p||!q||p.val!==q.val)return false
 
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
 };  

 /** 572
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function isSameTree(s,t){
       if(!s&&!t)return true;
       if(!s||!t)return false;
       if(s.val!==t.val)return false;
       return isSameTree(s.left,t.left)&& isSameTree(s.right,t.right);
    }
    if(!root)return false;
    if(isSameTree(root,subRoot))return true;
    return isSubtree(root.left,subRoot)|| isSubtree(root.right,subRoot);
   
   };

   /** 141
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next)return false;
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
      slow=slow.next;
      fast=fast.next.next
      if(slow===fast)return true
    }
    return false;
  
  };