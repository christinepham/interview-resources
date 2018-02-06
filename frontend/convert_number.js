
function convertNumber(num) {
  var negativeStr = num < 0 ? '-' : '';
  num = Math.abs(num);
  var stringNumber = num.toString();
  var hasDecimals = stringNumber.indexOf('.') > -1;
  var substringDec = hasDecimals ?
      stringNumber.substr(stringNumber.indexOf('.')) : '';
  stringNumber = stringNumber.substr(0, hasDecimals ? stringNumber.indexOf('.') : undefined);
  var convertedNumber = '';
  var offset = stringNumber.length % 3;

  for(var i = stringNumber.length - 1; i >= 0; i--) {
    convertedNumber = stringNumber.charAt(i) + convertedNumber;
    if (((i - offset) % 3 === 0) && i !== 0) {
      convertedNumber = ',' + convertedNumber;
    }

  }
  return negativeStr + convertedNumber + substringDec;
}


function test(num, expectedValue) {
  var result = convertNumber(num);
  console.log('Test[' + (result === expectedValue ? '✓' : '☓') + '] ' + num + ' -> ' + result);
}
test(306567, '306,567'); // remainder 0
test(1003567, '1,003,567'); //remainder 1
test(3567, '3,567'); //remainder 1
test(23445, '23,445'); //remainder 2
test(-123456, '-123,456');
test(5555.678, '5,555.678');
test(-45678.89, '-45,678.89');
