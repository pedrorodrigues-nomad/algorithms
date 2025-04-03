/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let x = 0

    for (let i = 0; i < nums.length; i++) {
        x ^= nums[i] ^ i
    }

    x ^= nums.length

    return x

};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
