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