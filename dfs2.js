function solve(board) {
  const m = board.length;
  const n = board[0].length;
  // const todoSet = new Set();
  for (let i = 0; i < m; i++) {
      if (board[i][0] === 'O') {
          dfs(i, 0);
      }
      if (board[i][n - 1] === 'O') {
          dfs(i, n - 1);
      }
  }
  for (let i = 0; i < n; i++) {
      if (board[0][i] === 'O') {
          dfs(0, i);
      }
      if (board[m - 1][i] === 'O') {
          dfs(0, m - 1);
      }
  }

  function dfs(i, j) {
      if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === 'X' || board[i][j] === '.') {
        return;
      }
      if (board[i][j] === 'O') {
          board[i][j] = '.';
      }
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] === 'O') {
              board[i][j] = 'X';
          }
          else if (board[i][j] === '.') {
              board[i][j] = 'O';
          }
      }
  }
  return board;
};

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log(solve(board));