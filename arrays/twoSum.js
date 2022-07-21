var twoSum = (nums, target) => {
  if (nums.length <= 1) return null;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let ntf = target - nums[i];
    if (nums[i] in map) return [map[nums[i]], i];
    else {
      map[ntf] = i;
    }
  }
};
console.log(twoSum([-1, -2, -3, -4, 11], 8));
console.log(twoSum([3], 7));
console.log(twoSum([], 7));
