class Solution {
  static Boolean[][] board = new Boolean[5][5];
  static boolean alive = true;
  
  public static void main(String[] args) {
    
    for (int i = 0; i < board.length; i++ ) {
      for (int j = 0; j < board[0].length; j++) {
        board[i][j] = false;
      }
    }
    
    /*
     *  0 0 0 0 0
     *  0 0 0 0 1
     *  0 0 1 0 0 X
     *  0 0 0 1 1
     *  0 0 0 0 0
     */
    
    board[1][4] = true;
    //board[2][4] = true;
    board[2][2] = true;
    board[3][4] = true;
    board[3][3] = true;
    //board[2][4] = true;
    
    System.out.println(cellAlive(2, 5));
  }
  
  //checking whether or not a cell is alive
  public static boolean cellAlive(int row, int col) {
    
    int numAlive = 0;
    Boolean cellCurrentlyAlive = board[row][col];
    
    for (int i = row - 1; i <= row + 1; i++) {
      for (int j = col - 1; j <= col + 1; j++) {
        try {
          if(board[i][j] == true) {
            numAlive++; 
          }
        } catch (ArrayIndexOutOfBoundsException ex) {
          continue; 
        }
      }
    }
    
    if(cellCurrentlyAlive) {
      numAlive--; 
    }
    
    if(numAlive == 2 && true) {
      return true;
    } else if(numAlive == 3 && true) {
      return true;
    } else {
      return false;
    }
  }
}