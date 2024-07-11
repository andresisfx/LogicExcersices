/** 49
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res={}
    for(let str of strs){
        let count=new Array(26).fill(0);
        for(let i=0;i<str.length;i++){
            count[str.charCodeAt(i)-"a".charCodeAt(0)]+=1//"a".charCodeAt(0)=97
        }
        let key=count.join(",");
        if(!res[key]){
            res[key]=[]
        }
        res[key].push(str)

    }
    return Object.values(res)
};