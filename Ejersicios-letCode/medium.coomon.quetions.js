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


/** 347
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq=new Map();
    for(let i=0;i<nums.length;i++){
        if(!freq.has(nums[i])){
            freq.set(nums[i],0)
        }
        freq.set(nums[i],freq.get(nums[i])+1)
    }
    const sortedArray=Array.from(freq).sort((a,b)=>b[1]-a[1])
    console.log(sortedArray )
    return sortedArray.slice(0,k).map(pair=>pair[0])
};