import java.io.*;
import java.util.*;

class myCode
{
    public static void main (String[] args) throws java.lang.Exception
    {
        System.out.println("Hello Java");
        
        //find number that occurs the most
        int[] data = {1, 3, 5, 2, 4, 1, 6, 3, 7, 9, 3, 76, 2, 5, 2, 4, 9, 4, 1, 34, 6, 3, 5, 3, 6, 8};
        
        Hashtable<Integer, Integer> num_count = new Hashtable<Integer, Integer>();
        
        for (int i = 0; i < data.length; i++) {
            if (!num_count.contains(data[i])) {
                num_count.put(data[i], 1);
            } else {
                num_count.put(data[i], num_count.get(data[i]) + 1);
            }
        }
        
        int max = 0;
        int maxKey = 0;
        
        for (Integer key : num_count.keySet()) {
            
            if (num_count.get(key) > max) {
                max = num_count.get(key);
                maxKey = key;
            } 
        }
        
        System.out.println("the max key is " + maxKey);
        System.out.println("the number of times it appears is " + max);
    }
}
