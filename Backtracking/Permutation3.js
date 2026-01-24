// Input: n = 4

// Output: [[1,2,3,4],[1,4,3,2],[2,1,4,3],[2,3,4,1],[3,2,1,4],[3,4,1,2],[4,1,2,3],[4,3,2,1]]

function permutation(n) {
  let result = [];
  let used = Array(n).fill(false);

  function backtrack(path) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i] || path[path.length - 1] % 2 === i % 2) continue;

      used[i] = true;
      path.push(i);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);

  return result;
}

console.log(permutation(4));
