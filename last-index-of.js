function lastIndexOf(value, current, original, result) {
  original = original || current;
  result = result || -1;
  if (current.length) {
    if (current[current.length - 1] === value) {
      result = original.length - current.length;
    }
    result = lastIndexOf(value, current.slice(0, current.length - 1), original, result)
  }
  return result;
}

var a = [1, 2, 4, 6, 5, 2, 7]
  , b = [1, 2, 4, 6, 2, 7]
  , c = [1, 2, 5, 4, 6, 5, 2, 7]
  , result;

result = lastIndexOf(5, a);
console.log('lastIndexOf(5, [%s]) -> %s', a, result);
result = lastIndexOf(5, b);
console.log('lastIndexOf(5, [%s]) -> %s', b, result);
result = lastIndexOf(5, c);
console.log('lastIndexOf(5, [%s]) -> %s', c, result);