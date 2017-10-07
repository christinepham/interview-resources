import java.io.*;
import java.util.*;

class myCode
{
    public static void main (String[] args) throws java.lang.Exception
    {
        //given two strings and a synonym list, determine if the two strings are synonyms
        List<Set<String>> list = new ArrayList<Set<String>>();
        HashSet<String> set1 = new HashSet<String>();
        HashSet<String> set2 = new HashSet<String>();
        
        set1.add("rate");
        set1.add("percentage");
        set1.add("%");
        
        set2.add("fatality");
        set2.add("casualty");
        
        list.add(set1);
        list.add(set2);
        
        String s1 = "car fatality rate";
        String s2 = "car casualty percentage";
        String s3 = "loan rate";
        String s4 = "savings percentage";
        
        
        System.out.println(isSynonym(s1, s2, list)); //should return true 
        System.out.println(isSynonym(s3, s4, list)); //should return false
        System.out.println(isSynonym("car", "car", list)); //should return true
    }
    
    public static boolean isSynonym(String s1, String s2, List<Set<String>> synonyms) {
  
        String[] s1Parts = s1.split("\\s");
        String[] s2Parts = s2.split("\\s");

        //base case
        if (s1 == null || s2 == null) {
            return false;
        } else if (s1.length() == 0 || s2.length() == 0) {
            return false;
        } else if (s1Parts.length != s2Parts.length) {
            return false;
        }
        
        for(int i = 0; i < s1Parts.length; i++) {
            boolean foundWord = false;
            if (s1Parts[i].equals(s2Parts[i])) {
                continue;
            } else {
                for (Set<String> synonymSet : synonyms) {
                    if (synonymSet.contains(s1Parts[i])) {
                        foundWord = true;
                        if (!synonymSet.contains(s2Parts[i])) {
                            return false;
                        }
                    }

                }
            }
            // word was not found in synonym sets, meaning there are no synonyms for this word so return false
            if (!foundWord) {
                return false;
            }
        }
        return true;
        
    }
}
