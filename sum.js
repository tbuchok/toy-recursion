function sum(array) {
  if (array.length) 
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
  return 0;
}

var a = [1, 2, 3, 4, 5]
  , b = []
  , result;

result = sum(a);
console.log('sum([%s]) -> %s', a, result);
result = sum(b);
console.log('sum([%s]) -> %s', b, result);