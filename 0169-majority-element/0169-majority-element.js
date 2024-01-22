/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0];
    let vote = 1;
    for(let i=1; i<nums.length; i++){
        if(vote == 0){
            majority = nums[i];
            vote++;
        }else if(majority == nums[i]){
            vote++;
        }else{
            vote--;
        }
    }
    return majority
};