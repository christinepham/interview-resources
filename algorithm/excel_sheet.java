class Solution {
  static Hashtable<String, Integer> tbl = new Hashtable<String, Integer>();
  
  public static void main(String[] args) {
    set_cell("A1", "5");
    set_cell("B1", "10");
    set_cell("C2", "=A1+B1");
    set_cell("D2", "=C2+A1");
    System.out.println(get_value("A1")); //returns 5
    System.out.println(get_value("A2")); //returns 0
    System.out.println(get_value("C2")); //returns 15
    System.out.println(get_value("D2")); //returns 20
  }
  
  public static void set_cell(String cell_name, String value) {
    boolean isLetter = value.contains("=");
    String[] cells = new String[4];
    if (isLetter) {
      cells = value.split("[=\\+]");
      tbl.put(cell_name, get_value(cells[1]) + get_value(cells[2]));
    } else {
      tbl.put(cell_name, Integer.valueOf(value));
    }
  }
  
  public static int get_value(String cell_name) {
    if(tbl.containsKey(cell_name)) {  
      return tbl.get(cell_name);
    }
    
    return 0;
  }
    
}
