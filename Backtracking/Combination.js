let candidates = [2, 3, 6, 7];
let target = 7;

function combination(candidates, target) {
  let result = [];

  function backtrack(idx, path, remaining) {
    console.log("path", path, remaining)
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    if (remaining < 0) return;
    for (let i = idx; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i , path, remaining - candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}

console.log(combination(candidates, target));
