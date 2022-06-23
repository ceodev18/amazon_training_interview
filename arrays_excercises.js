function twoSum(nums, target) {
    var map = {}
    for (let i = 0  ; i < nums.length; i++) {

        if(map[target-nums[i]]>=0){
            return map[target-nums[i],i]
        }else{
            map[i]=nums[i]
            console.log(map)
        }
    }
}

/*function twoSum(nums, target) {
    
    let base = 0
    
    for (let index = 1  ; index < nums.length; index++) {
        console.log(nums[base]+" + "+nums[index])
        if(nums[base]+nums[index]===target){
            return [base,index]
        }
        if(index === nums.length-1){
            base++
            index=base
        }
        
    }
    return []
    
};*/
//twoSum([3,2,4],6)

var maxSubArray = function(nums) {
    if(nums.length == 1)  return nums[0]
    let max_sum = -100000
    let aux = 2
    let total_sums = []
    for (let index = 0; index< nums.length-1; index++) {
        let sum = 0
        let inner_array = []
        for (let j = 0; j < aux; j++) {
            sum += nums[index+j]
            inner_array.push(index+j)
        }
        let data = { array:inner_array, sum: sum}
        total_sums.push(data)
         
    }
    console.log(total_sums)
};
//maxSubArray([-2,1,-3,4,-1,2,1,-5,4])   
let data = [0,1,0,3,12]
//[1,0,0,3,12]
//[1,3,0,0,12]
var moveZeroes = function(nums) {
    if(nums.length == 1) return nums
    let non_zeros = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            non_zeros.push(nums[i])
        }
    }
    for (let index = 0; index < nums.length; index++) {
        if(index<non_zeros.length){
            nums[index]= non_zeros[index]   
        }else{
            nums[index]=0
        }
        
    }
    
};
//moveZeroes(data)
//console.log(data)


let sample = [1,2,3,4,5,6,7]
//sample.splice()



/*let size = 3
for (let index = 0; index < size; index++) {
    sample.unshift(sample.pop())
}
console.log(sample)*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    if(k === 0 || k === nums.length)return
    let to_move = nums.splice(nums.length-k,k)
    nums.splice(0,0,...to_move)
};