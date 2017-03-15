1. Given an unsorted list, find the nth largest number Input: An unsorted list and n Output: nth largest number in the list / NULL (if n is not valid)

2. Given a sorted linked list, delete all duplicates such that each element appear only once.

Other solutions:
- [GeeksforGeeks](http://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/)
- [Program Creek](http://www.programcreek.com/2013/01/leetcode-remove-duplicates-from-sorted-list/)
```
For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
```

```Java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     public int val;
 *     public ListNode next;
 *     ListNode(int x) { val = x; next = null; }
 * }
 */
public class Solution {
	public ListNode deleteDuplicates(ListNode A) {
	    
	    if (A == null)
	        return A;
	    
	    ListNode next;
	    ListNode prevNode;
	    int prev = A.val;
	    
	    next = A.next;
	    prevNode = A;
	    
	    while (next != null) {
	        if (next.val == prev) {
	            prevNode.next = next.next;
	        } else {
	            prevNode = next;
	            prev = next.val;
	        }
	        
	        next = next.next;
	    }
	    
	    return A;
	}
}
```
3. Root to leaf path sum equal to a given number:

-[GeeksForGeeks](http://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/)
