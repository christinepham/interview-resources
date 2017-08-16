import java.util.*;

public class Program
{
	public static void main(String[] args) {
	    int[] nums1 = {1, 2, 3, 4, 5, 6};
	    int[] nums2 = {2, 2, 2, 2};
	    
	    /** Tests **/
	    System.out.println(twoSums(nums1, 7) == 3);
		System.out.println(twoSums(nums2, 4) == 6);
		System.out.println(twoSums(nums1, 8) == 2);
	}
	
	public static int twoSums(int[] numbers, int target) {
	    int count = 0;
	    HashMap<Integer, Integer> pairs = new HashMap<Integer, Integer>();
	    
	    for (int i : numbers) {
	        int val = target - i;
	        if (pairs.get(val) != null) {
	            count += pairs.get(val);
	        }
	        
	        if (!pairs.containsKey(i)) {
	            pairs.put(i, 1);
	        } else {
	            pairs.put(i, pairs.get(i)+1);
	        }
	    }
	    
	    return count;
	}
}
