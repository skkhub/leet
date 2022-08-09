var combinationSum = function(candidates, target) {
  // const len = candidates.length;
  const result = [];
  backtractking(candidates, target, result, [], 0);
  return result;
};

var backtractking = function(candidates, target, result, solutions, start) {
  if (target < 0) {
      return;
  }
  if (target === 0) {
      result.push(solutions);
      return;
  }

  for (let i = start; i < candidates.length; i++) {
      solutions.push(candidates[i]);
      backtractking(candidates, target - candidates[i], result, solutions, i);
      solutions.pop();
  }
}

combinationSum([2,3,6,7], 7);