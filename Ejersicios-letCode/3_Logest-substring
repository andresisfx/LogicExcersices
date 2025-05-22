//TODO Given a strings, find the length of the longest substring without duplicate characters.

 

//* Example 1:

//* Input: s = "abcabcbb"
//* Output: 3
//* Explanation: The answer is "abc", with the length of 3.
//* Example 2:

//* Input: s = "bbbbb"
//* Output: 1
// *Explanation: The answer is "b", with the length of 1.
//* Example 3:

//* Input: s = "pwwkew"
//* Output: 3
//* Explanation: The answer is "wke", with the length of 3.
//* Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

const s= "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    const arrString= s.split("");
    let strContainer=[];
    let maxLength=0
    console.log("aqui arrString",arrString)
    for(let str of arrString){
         console.log(str)
        if(strContainer.includes(str)){

            if(strContainer.length>maxLength){
                maxLength=strContainer.length
            }
            console.log("entre al if")
            console.log("strContainer antes del splice",strContainer)
            strContainer.splice(0,strContainer.indexOf(str)+1);
    
        }
        if(strContainer.length>maxLength){
                maxLength=strContainer.length
            }
        strContainer.push(str)
        
    }
       
    
    console.log("final",strContainer)
    return maxLength
};


console.log(lengthOfLongestSubstring(s))