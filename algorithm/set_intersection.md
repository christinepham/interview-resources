// Write a function to compute set intersection of two integer arrays 
// arrays are unsorted
// [1,3,3,9] [3,6,9] => [1,3]
// sorted version [1, 3, 3, 9][1, 3]
// [1, 9, 3, 4][1, 3, 4] => [1, 3, 4]
// O(n)

```java
public int printIntersection(int[] arr1, int[] arr2) {
  Set<Integer> hash1  = new HashSet<Integer>();
  for(int i: arr1) {
    hash1.add(i);
  }
  
  Set<Integer> hash2 = new HashSet<Integer>();
  for(int i: arr2) {
    if(hash1.contains(i)) {
      hash2.add(i);
    }
  }
  
  return hash2;
  
}
```