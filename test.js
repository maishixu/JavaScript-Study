nums = [12,28,83,4,25,26,25,2,25,25,25,12]
for(let i = 1;i<nums.length;i++){
    for(j = 0;j<nums.length-i;j++){
        if(nums[j]<nums[j+1]){
            let temp = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] =temp
        }
    }
}
console.log(nums)