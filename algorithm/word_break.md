Given an input string and a dictionary of words, segment the input string into a space-separated sequence of dictionary words if possible. For
example, if the input string is "applepie" and dictionary contains a standard set of English words, then we would return the string "apple pie" as output.

Brute Force:

```java
public String wordBreak(String input, Set<String> dict) {
  int len = input.length();
  String word = "";
  String sentence = "";
  
  for (int i = 0; i < len; i++) {
    for (int j = 0; j < len; j++) {
      word = input.substring(i, j);
      if (dict.contains(word)) {
        sentence.concat(word, " ");
      }
    }
  }
  return sentence;
```

Click here for better solutions:
1. [The Noisy Channel](http://thenoisychannel.com/2011/08/08/retiring-a-great-interview-problem)
2. [Tutorial Horizon](http://algorithms.tutorialhorizon.com/the-word-break-problem/)
