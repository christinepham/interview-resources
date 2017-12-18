//Option 1:

function flattenArray(arr) {
  var flattened = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) {
      flattened = flattened.concat(flattenArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  
  return flattened;
}

//Option 2:

function flattenArray(arr) {
  return arr.reduce(function(prev, curr) {
    return prev.concat(
      Array.isArray(curr)
        ? flatten(curr)
        : curr
    );
  }, []);
}

var input = [1, [2, 3], [4, 5, [6, 7]]];

console.log(flattenArray(input));
