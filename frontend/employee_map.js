/* A company's organizational structure is represented as
1: 2, 3, 4
In the above employees with id 2, 3 and 4 report to 1.

Assume the following hierarchy.
3: 5, 6, 7
1: 2, 3, 4
5: 8, 9, 10

1: 2, 3, 4, 5, 6, 7, 8, 9, 10
Given an employee id, return all the employees reporting to him directly or indirectly.*/

var reports = [];
var map = new Map();

//check for employee id if it exists
function employeeHierarchy(empId, obj) {

    //check if obj contains empId
    if (obj.get(empId)) {
      return;
    }

    //setting up the map
    for ([key, value] in obj) {
      if(map.get(key)) {
        map.set(key, value);
      }
    }

    var entry = map.get(empId);
    reports.push(entry);
    for (entry in map.entries) {
     //2, 3, 4
     if (map.get(entry)) {
        reports.push(map.get(entry));
        employeeHierarchy(map.get(entry), map);
        }
    }
}

var employeeMap = {
     1: [2, 3, 4],
     5: [8, 9, 10],
     3: [5, 6, 7
}
