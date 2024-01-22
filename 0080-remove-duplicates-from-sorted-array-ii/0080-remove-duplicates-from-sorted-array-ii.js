/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let index = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[index-2] != nums[i]){
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};