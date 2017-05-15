import java.io.*;
import java.util.*;

/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 *
 * Input: [2, 2, 8]
 * Output: ['cat', 'bat', 'bath']
 */

class Solution {
  static String[] dictionary = {"cat", "bat", "apple", "bath", "boo", "foo", "hello", "goodbye"};
  static Map<Integer, List<String>> wordMapping = new HashMap<Integer, List<String>>();
  
  public static void main(String[] args) {
    String nums = "228";
    t9Dictionary(nums);
  }    
  
  public static List<String> t9Dictionary(String nums) {
    wordMapping.put(2, Arrays.asList("a", "b", "c"));
    wordMapping.put(3, Arrays.asList("d", "e", "f"));
    wordMapping.put(4, Arrays.asList("g", "h", "i"));
    wordMapping.put(5, Arrays.asList("j", "k", "l"));
    wordMapping.put(6, Arrays.asList("m", "n", "o"));
    wordMapping.put(7, Arrays.asList("p", "q", "r", "s"));
    wordMapping.put(8, Arrays.asList("t", "u", "v"));
    wordMapping.put(9, Arrays.asList("w", "x", "y", "z"));
    
    List<String> output = new ArrayList<String>();
    String word = "";
    
    //if you input no numbers
    if(nums.length() == 0) {
      return output;
    }
    
    if(nums.length() == 1) {
      return wordMapping.get(nums.charAt(0) - '0');
    }
    
    //get all the possibilities of combinations for words
    List<String> possibilities = t9Dictionary(nums.substring(1, nums.length()));
    for(String first : wordMapping.get(nums.charAt(0) - '0')) {
      for(String rest : possibilities) {
        output.add(first + rest);
      }
    }
    
    //go through each possibility and check if it exists in the words dictionary
    for(int i = 0; i < output.size(); i++) {
      for(int j = 0; j < dictionary.length; j++) {
        if(dictionary[j].equals(output.get(i))) {
          word = output.get(i);
        }
      }
    }
    
    //if you want to output a word from the dictionary
    System.out.println(word);
    
    //if you wanted to output possibilities then return output which goes with the return type
    return output;
  }
}
