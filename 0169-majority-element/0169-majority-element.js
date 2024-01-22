/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const ht = {};
    
    for(const n of nums){
        ht[n] = ht[n] + 1 || 1; 
    }
    
    for(const key in ht){
        if(ht[key] > Math.floor(nums.length/2)){
            return key;
        }
    }
    
};