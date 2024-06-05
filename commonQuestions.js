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