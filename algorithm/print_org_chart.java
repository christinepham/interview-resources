class Org {
  private String name;
  private ArrayList<Org> employees;

  public Org(String name) {
    this.name = name;
    this.employees = new ArrayList<Org>();
  }

  public void addEmployee(Org emp) {
    this.employees.add(emp);
  }

  public String getName() {
    return name;
  }

  public void printOrgChart(String prefix) {
    System.out.println(prefix + name);
    for (Org employee : employees) {
      employee.printOrgChart(prefix + "....");
    }
  }
}
class Solution {
  public static HashMap<String, Org> rootOrgs = new HashMap<String, Org>();
  public static HashMap<String, Org> findOrgs = new HashMap<String, Org>();

  public static void main(String[] args) {
    //adding individually, will parse later
    ArrayList<ArrayList<String>> org = new ArrayList<ArrayList<String>>();
    org.add(new ArrayList<String>(Arrays.asList("A", "B", "C", "D")));
    org.add(new ArrayList<String>(Arrays.asList("B", "E", "F")));
    org.add(new ArrayList<String>(Arrays.asList("D", "G", "I")));
    org.add(new ArrayList<String>(Arrays.asList("G", "H")));

    createOrgChart(org);
  }

  public static void createOrgChart(ArrayList<ArrayList<String>> input) {
    for (List<String> orgList : input) {
      Org manager = null; //not sure who it is yet
      for (int i = 0; i < orgList.size(); i++) {
        String orgName = orgList.get(i);
        boolean newlyAdded = false; //keep track of added orgs
        Org curr = findOrgs.get(orgName);
        if (curr == null) { //doesn't exist yet
          curr = new Org(orgName);
          findOrgs.put(orgName, curr);
          newlyAdded = true;
        }
        if (i == 0) {
          if (newlyAdded) {
            rootOrgs.put(orgName, curr);
          }
          manager = curr;
        } else {
          manager.addEmployee(curr);
          if (rootOrgs.get(orgName) != null) {
            rootOrgs.remove(orgName);
          }
        }
      }
    }

    for (Org rootOrg : rootOrgs.values()) {
      rootOrg.printOrgChart("");
    }
  }
}




/* 
Your previous Plain Text content is preserved below:

PRINT AN ORG CHART

We have an organization and need to print a org chart in the terminal. Input is
a list of strings. Each string is a management / report relationship.

EXAMPLE INPUT:

[
    'A,B,C,D',
    'B,E,F',
    'D,G,I',
    'G,H'
]

A is the manager of B, C, D. B is the manager of E and F, and so forth.

EXAMPLE OUTPUT:

A
....B
........E
........F
....C
....D
........G
............H
........I

BONUS OUTPUT:

A prettier version:

A____B____E
|....|____F
|____C
|____D____G____H
|....|____I
 */
