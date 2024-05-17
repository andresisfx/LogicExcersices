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