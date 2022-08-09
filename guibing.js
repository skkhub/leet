/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const right = nums.length - 1;
  mergeSort(nums, 0, right);
  return nums;
};

var mergeSort = function (nums, left, right) {
  if (left === right) {
    return;
  }

  const mid = left + ((right - left) >> 1);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  let pl = left;
  let pr = mid + 1;
  let temp = [];
  while (pl <= mid || pr <= right) {
    if (pl > mid) {
      temp.push(nums[pr]);
      pr += 1;
    } else if (pr > right) {
      temp.push(nums[pl]);
      pl += 1;
    } else if (nums[pl] <= nums[pr]) {
      temp.push(nums[pl]);
      pl += 1;
    } else {
      temp.push(nums[pr]);
      pr += 1;
    }
  }
  nums.splice(left, temp.length, ...temp);
}

sortArray([5, 2, 3, 1]);