function Trie(isEnd = false) {
  this.isEnd = isEnd;
  this.next = {};
}
Trie.prototype.insert = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
      if (!cur.next[word[i]]) {
          cur.next[word[i]] = new Trie();
      }
      cur = cur.next[word[i]];
  }
  cur.isEnd = true;
}
Trie.prototype.isPrefix = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
      if (!cur.next[word[i]]) {
          return false;
      }
      cur = cur.next[word[i]];
  }
  return true;
}
Trie.prototype.isWord = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
      if (!cur.next[word[i]]) {
          return false;
      }
      cur = cur.next[word[i]];
  }
  return cur.isEnd;
}

/**
* @param {character[][]} board
* @param {string[]} words
* @return {string[]}
*/
var findWords = function(board, words) {
  let trie = new Trie();
  for (let word of words) {
      trie.insert(word);
  }

  function traverse(curTrie, i, j, m, n, str = '', result = new Set()) {
      const nextTrie = curTrie.next[board[i][j]];
      if (!nextTrie) {
          return;
      }
      str += board[i][j];
      if (nextTrie.isEnd) {
          result.add(str);
          // return;
          // 这里不能返回，因为有种情况：words中包含有count，country，需要继续往下走
      }
      if (nextTrie) {
          const saved = board[i][j];
          board[i][j] = '#';
          if (i - 1 >= 0 && i - 1 < m && board[i - 1][j] != '#') {
              traverse(nextTrie, i - 1, j, m, n, str, result);
          }
          if (i + 1 >= 0 && i + 1 < m && board[i + 1][j] != '#') {
              traverse(nextTrie, i + 1, j, m, n, str, result);
          }
          if (j - 1 >= 0 && j - 1 < n && board[i][j - 1] != '#') {
              traverse(nextTrie, i, j - 1, m, n, str, result);
          }
          if (j + 1 >= 0 && j + 1 < n && board[i][j + 1] != '#') {
              traverse(nextTrie, i, j + 1, m, n, str, result);
          }
          board[i][j] = saved;
      }
  }

  const m = board.length;
  const n = board[0].length;
  const result = new Set();
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          traverse(trie, i, j, m, n, '', result);
      }
  }
  return [...result];
};


const board = [["a","b"],["a","a"]];
const words = ["aba","baa","bab","aaab","aaa","aaaa","aaba"];
console.log(findWords(board, words));