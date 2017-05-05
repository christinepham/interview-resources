function flattenArray(arr) {

    var flattened = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenArray(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    
    return flattened;
}

var input = [1, [2, 3], [4, 5, [6, 7]]];

console.log(flattenArray(input));
