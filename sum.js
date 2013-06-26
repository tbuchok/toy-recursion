function sum(a) {
  if (a.length) return a[a.length - 1] + sum(a.slice(0, a.length - 1));
  return 0;
}

var a = [1, 2, 3, 4, 5]
  , b = []
  , result;

result = sum(a);
console.log('sum([%s]) -> %s', a, result);
result = sum(b);
console.log('sum([%s]) -> %s', b, result);