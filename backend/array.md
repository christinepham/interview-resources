### 1. Given a sorted array, find if a value exists in O(log(n)) time
```Java
class Main {
     public static void main(String[] args) {
          System.out.println("Hello, world!");
         int[] arr1 = {1, 2, 3, 4, 4, 5};
         System.out.print(checkValue(arr1, 1, 5, 4));
     }
    
    public static boolean checkValue(int[] arr, int start, int end, int num) {
        int len = end - start + 1;
        
        if (num == arr[len]) {
             return true;   
        }
        
        if (num < arr[len/2] && num >= arr[start]) {   
             return checkValue(arr, start, len/2 - 1, num);   
        } else if (num > arr[len/2] && num <= arr[end]) {
            return checkValue(arr, len/2 + 1, end, num);
        }
        
        return false;
    }
}
```

### 2. Given an unsorted array of n integers which can contain integers from 1 to n. Some elements can be repeated multiple times and some other elements can be absent from the array. Count frequency of all elements that are present and print the missing elements. (Taken from http://www.geeksforgeeks.org/count-frequencies-elements-array-o1-extra-space-time/)
