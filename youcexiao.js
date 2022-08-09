var countSmaller = function(nums) {
  const len = nums.length;
  const ans = new Array(len).fill(0);
  let indexes = [];
  for (let i = 0; i < len; i++) {
      indexes.push(i);
  }
  mergeSort(nums, indexes, 0, len - 1, ans);
  return ans;
};

function mergeSort(nums, indexes, left, right, ans) {
  const mid = left + ((right - left) >> 1);
  if (mid - left > 0) {
      mergeSort(nums, indexes, left, mid, ans);
  }
  if (right - mid - 1 > 0) {
      mergeSort(nums, indexes, mid + 1, right, ans);
  }
  let pl = left;
  let pr = mid + 1;
  let temp = [];
  while (pl <= mid || pr <= right) {
      if (pl > mid) {
          temp.push(indexes[pr]);
          pr++;
      } else if (pr > right) {
          temp.push(indexes[pl]);
          ans[indexes[pl]] += right - mid;
          pl++;
      } else if (nums[indexes[pl]] <= nums[indexes[pr]]) {
          temp.push(indexes[pl]);
          ans[indexes[pl]] += pr - mid - 1;
          pl++;
      } else {
          temp.push(indexes[pr]);
          pr++;
      }
  }
  for (let i = 0; i < temp.length; i++) {
      indexes[left + i] = temp[i];
  }
}

countSmaller([5,2,6,1]);