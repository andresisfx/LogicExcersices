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