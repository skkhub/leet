function solve(board) {
  const m = board.length;
  const n = board[0].length;
  const todoList = [];
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] === 'O') {
              todoList.push([i, j]);
          }
      }
  }
  for (let todo of todoList) {
      const [i, j] = todo;
      if (board[i][j] === 'O') { // 回溯过程中，可能有的已经被改成 X 或者 . 了，经过判断的无序再回溯。或者这里不判断也不会有问题，因为dfs内部也有判断
          dfs(todo[0], todo[1]);
      }
      if (board[i][j] === '.') {
          board[i][j] = 'O';
      }
  }

  function dfs(i, j) {
      if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '.') {
          return false;
      }
      if (board[i][j] === 'X') {
          return true;
      }
      board[i][j] === 'X';
      const ok = dfs(i - 1, j) && dfs(i + 1, j) && dfs(i, j - 1) && dfs(i, j + 1);
      if (!ok) {
          board[i][j] = '.';
          return false;
      }
      return true;
  }
  return board;
};

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);