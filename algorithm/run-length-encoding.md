Write a program that takes in a string and returns the number of repeating characters.
https://en.wikipedia.org/wiki/Run-length_encoding

INPUT: "aaaabbbbbccc"
OUTPUT: "4a5b3c"

```java
class Solution {
  public static void main(String[] args) {
    
    System.out.println(numChar("aabbbbcccc"));

  }
  
  public static String numChar(String word) {
    String output = "";
    int num = 0;
    int count = 1;
    int len = word.length() -1;
    
    if ((num+1) < len) {
      while ((num < len) && (word.charAt(num) == word.charAt(num+1))) {
        count++;
        num++;
      }
      output = output.concat(new Integer(count).toString() + word.charAt(num));
      output = output + numChar(word.substring(num+1)); 
    }
    
    return output;
  }
}
```
