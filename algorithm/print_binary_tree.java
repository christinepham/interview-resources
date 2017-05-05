//     1
//    / \
//	2	  3
// /\		\
//4  5		 6	

// 4
//  \
//   2
//    \
//     5
//      \
//       1
//         ...

import java.util.ArrayList;

// To execute Java, please define "static void main" on a class named Solution.

class Solution {
  public static class Node {
  	Node left;
    Node right;
    int data;
    
    public Node(int val, Node left, Node right) {
      this.data = val;
      this.left = left;
      this.right = right;
    }
  }
  
  public static void main(String[] args) {
    System.out.println("Hello, World");
    Node t = new Node(1, new Node(2, new Node(4, null, null), new Node(5, null, null)), new Node(3, null, new Node(6, null, null)));
    System.out.print(printBinaryTree(t));
  }
  
  public static String printBinaryTree(Node t) {
    StringBuilder s = new StringBuilder();
    if (t == null) {
      return "";
    }
    
    if(t.left != null) {
      	s.append("<");
    }
    if(t.right != null) {
		s.append(">");   
    }
    
    return printBinaryTree(t.left) + s.append(t.data) + printBinaryTree(t.right);
  }
}
