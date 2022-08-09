var canFinish = function(numCourses, prerequisites) {
  const len = prerequisites.length;
  if (!len) {
      return true;
  }
  const requireList = new Array(numCourses).fill().map(item => new Set());

  for (let prer of prerequisites) {
      requireList[prer[0]].add(prer[1]);
  }
  const stack = [];
  for (let i = 0; i < numCourses; i++) {
      if (requireList[i].size === 0) {
          stack.push(i);
      }
  }
  while (stack.length > 0) {
      const n = stack.shift();
      for (let i = 0; i < numCourses; i++) {
          if (requireList[i].has(n)) {
              requireList[i].delete(n);
              if (requireList[i].size === 0) {
                  stack.push(i);
              }
          }
      }
  }
  for (let set of requireList) {
      if (set.size > 0) {
          return false;
      }
  }
  return true;
};
canFinish(2, [[1,0]]);