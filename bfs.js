function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] === 1) {
      return -1;
  }
  const len = grid.length;
  // 记录走过的格，paths[i][j] = 2表示坐标为i，j的单元格已被走过
  const paths = new Array(len).fill(0).map(() => new Array(len).fill(0));
  const dir = [[1, 1], [1, 0], [0, 1], [-1, 1], [1, -1], [0, -1], [-1, 0], [-1, -1]];
  const queue = [[0,0]];
  let ans = 0;
  while (queue.length) {
      let step = queue.length;
      ans += 1;
      while (step) {
          step--;
          const [i, j] = queue.pop();
          if (bfs(i, j)) {
              return ans;
          }
      }
  }
  function bfs(i, j) {
      if (i === len - 1 && j === len - 1 && isOK(i, j)) {
          return true;
      }
      paths[i][j] = 2;
      for (let idx = 0; idx < 8; idx++) {
          const [row, col] = dir[idx];
          if (isOK(i + row, j + col)) {
              queue.push([i + row, j + col]);
          }
      }
  }
  function isOK(i, j) {
      if (i < 0 || j < 0 || i >= len || j >= len || grid[i][j] === 1 || paths[i][j]) {
          return false;
      }
      return true;
  }
  return -1;
};

const p = [[0,0,0],[0,1,0],[0,0,0]];
console.log(shortestPathBinaryMatrix(p));
