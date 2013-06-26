function sum(array) {
  var val = 0;
  if (array.length) {
    val = array[array.length - 1] + sum(array.slice(0, array.length - 1));
  }
  return val;
}

var a = [1, 2, 3, 4, 5]
  , b = []
  , result;

result = sum(a);
console.log('sum([%s]) -> %s', a, result);
result = sum(b);
console.log('sum([%s]) -> %s', b, result);