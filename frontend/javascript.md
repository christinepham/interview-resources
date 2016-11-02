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
