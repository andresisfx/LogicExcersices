const s= "pwwkew"

var lengthOfLongestSubstring = function(s) {
    const arrString= s.split("");
    let strContainer=[];
    let nuevoStrCont=[]
    console.log("aqui arrString",arrString)
    arrString.map((str)=>{
        console.log(str)
        if(strContainer.includes(str)){
            console.log("entre al if")
            console.log("strContainer antes del splice",strContainer)
            nuevoStrContstrContainer.splice(strContainer.indexOf(str)+1,strContainer.length);
            strContainer.push(str)
            console.log("aquui strContainer",strContainer)
        }else{
            strContainer.push(str)
        }
    })
    console.log("final",strContainer)
    return strContainer.length
};

console.log(lengthOfLongestSubstring(s))