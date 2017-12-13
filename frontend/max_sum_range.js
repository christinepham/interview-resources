function maxSumRange(n) {
  var size = n[0];
  var max = Number.MIN_VALUE;
  var tmp = 0;

  for (var i = 1; i < size; i++) {
    tmp = tmp + n[i]; //continually add up the values
    if (max < tmp) {
      max = tmp;
    }
    if (tmp < 0) { //once the sum is less than 0, reset to new starting point
      tmp = 0;
    }
  }

  return max;
}

var nums = [10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6];

console.log(maxSumRange(nums));
