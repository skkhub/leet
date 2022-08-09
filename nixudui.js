// 数组中的逆序对

var reversePairs = function(nums) {
  const len = nums.length;
  return guibing(nums, 0, len - 1);
};

var guibing = function(nums, left, right) {
  if (left === right) {
      return 0;
  }
  let count = 0;
  const mid = left + ((right - left) >> 1);
  count += guibing(nums, left, mid);
  count += guibing(nums, mid + 1, right);

  let pl = left;
  let pr = mid + 1;
  const temp = [];
  while (pl < mid + 1 && pr < right + 1) {
      if (nums[pl] <= nums[pr]) {
          temp.push(nums[pl]);
          pl += 1;
      } else {
          const leftLen = mid + 1 - pl;
          count += leftLen;
          temp.push(nums[pr]);
          pr += 1;
      }
  }
  while (pl < mid + 1) {
      temp.push(nums[pl]);
      pl += 1;
  }
  while (pr < right + 1) {
      temp.push(nums[pr]);
      pr += 1;
  }
  nums.splice(left, temp.length, ...temp);
  return count;
}

reversePairs([1,3,2,3,1]);
