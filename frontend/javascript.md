### 1. Create a Tic Tac Toe Game with the following requirements:
 * Should be mobile friendly
 * Each space on the board should be either 'blank', 'x' or 'o'
 * Should be a grid of 3x3 columns
 * Should tap on the board to enter a value
 * 'x' should start the game and then alternate between 'x' and 'o'
 * When all spaces are filled then indicate 'Game is Over' and offer the chance to play again
 * Doesn't need to determine if there was a winner or not
 * Has a button to 'Clear' the board or 'Restart' the game

### Convert Roman Numeral to Integer Value
````Javascript
  function convertRomanNumeral(num) {
    var result = 0;
    
    var values = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "C", "XC", "L", "X", "IX", "V", "IV", "I"];
    
    while (num != '') {
      for (var i = 0; i <= values.length; i++) {
        if (num.indexOf(roman[i]) === 0) {
          result += values[i];
          num = num.replace(roman[i], '');
        }
      }
    }
    return result;
  }
```
Notes:
I 1
II 2
III 3
IV 4
V 5
VI 6
IX 9
X 10
XI 11
XIV 14
XIX 19
XXVI 26
XC 90
C 100
D 500
M 10000
MM 2000
MCMX 1910

http://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/
http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
