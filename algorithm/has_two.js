// Input : a list of numbers, a number x
// Output: true/ false if two numbers in list sum to x
// ex 1: ([1,2,3], 5) => true
// ex 2: ([1,2,3], 6) => false
// ex 3: ([1,3,3], 6) => true

////
// var dict = {};
// loop over each value in list
// dict.add(currentNum)
// let's say you add 1, looking for 5
// check if the dict contains 5-1=4

function hasTwoSum(list, x) {
  return hasTwo(list, x, add);
}

function hasTwoProduct(list, x) {
  return hasTwo(list, x, product);
}

function add(x,y) {
  return x + y;
}

function product(x, y) {
  return x*y;
}

function hasTwo(list, x, operator) {
  for (var i = 0; i < list.length; i++) {
    for (var j = i+1; j < list.length; j++) {
      if (operator(list[i], list[j]) === x) {
        return true;
      }
    }
  }
  return false;
}

var test = function() { 
  var count = 0;
  return function(left, right) {
    count++;
    if (left !== right) {
      console.log("TEST FAILED: " + count);
    }
  }
}()
              
test(hasTwoSum([1,2,3], 5), true)
test(hasTwoSum([1,2,3], 6), false)
test(hasTwoSum([1,3,3], 6), true)
test(hasTwoSum([], 4), false);

test(hasTwoProduct([-1,2,3,5], 5), false)
test(hasTwoProduct([1,2,3], 6), true)
test(hasTwoProduct([1,2,3], 9), false)
test(hasTwoProduct([1,3,3], 6), false)
test(hasTwoProduct([], 4), false);
test(hasTwoProduct([-1, -2, -2, -4, -6], 4), true);
test(hasTwoProduct([-2, -2, -4, -6], 4), true);
