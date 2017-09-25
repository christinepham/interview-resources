import java.io.*;
import java.util.*;

/*
0123...
abcd...z
cdef...b

bad -> dcf

Objective: Implement a function that takes in two strings. Output whether one of the strings could be a shift cipher encrypted version of the other string. Assume that strings only contain the characters from 'a' to 'z'.

bad, dcf: true
abc, bcd: true
bad, dcg: false
*/

/*
Objective: Implement a function that takes in a list of strings. Partition the list of strings into groupings such that each grouping contains all the strings that are shifted versions of one another. Assume that all strings are of the same length greater than 1 and contain only the characters from 'a' to 'z'.

(ab, bc, ac, bd, cd, ae, rs) -> ((ab, bc, cd, rs), (ac, bd), (ae))
Shift Key = 2

isCipheredVersion(ab, bc)
*/

/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 */

class Solution {
  public static void main(String[] args) {
    String s1 = "bad";
    String s2 = "dcf";
    System.out.println(isCipheredVersion(s1, s2));
    
    List<String> list = new ArrayList<String>();
    list.add("ab");
    list.add("bc");
    list.add("ac");
    list.add("cd");
    
    System.out.println(cipheredList(list));
  }
  
  /*
    All lower case
    1. Determine the shiftkey
    2. Shift one of the strings
    
    Edge Case
    1. Check initial lengths --> false
    2. Check for null strings --> false
    3. Check for 0 length --> false
  */
  
  public static boolean isCipheredVersion(String s1, String s2) {
    if (s1.length() != s2.length()) {
      return false; 
    } else if (s1 == null || s2 == null) {
      return false;
    } else if (s1.length() == 0 || s2.length() == 0) {
      return false;
    }
    
    int key = (int)s2.charAt(0) - (int)s1.charAt(0);

    StringBuffer result = new StringBuffer();
    
    for (int i = 0; i < s1.length(); i++) {
       char cipher = (char)(((int)s1.charAt(i) + key - 97) % 26 + 97);
      result.append(cipher);
    }
    
    return result.toString().equals(s2);
    
  }
  
  //not fully functional
  public static ArrayList<String> cipheredList(List<String> s1) {
    ArrayList<ArrayList<String>> newList = new ArrayList<ArrayList<String>>();
    newList.add(s1.indexOf(0));
    
    for (int i = 1; i < s1.size(); i++) {
      int ind = 0;
      for (int j = 0; j < newList.size(); j++) { 
        if (isCipheredVersion(newList.get(j).indexOf(0), s1.get(i))) {
          newList.get(j).add(s1.get(i));
          break;
        } else {
          ind = j;
        }
      }
      if (ind == newList.size() -1) {
      //newlist adds a new list of s1.get(i) --> index will be size - 1
      newList.add(newList.size()-1, ArrayList.add(s1.get(i)));
      }
    }
    return newList;
  }
}
