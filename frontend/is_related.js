/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   9

Write a function that, for two given individuals in our dataset, returns true if and only if they share at least one ancestor.

Sample input and output:
parentChildPairs, 3, 8 => false
parentChildPairs, 5, 8 => true
parentChildPairs, 6, 8 => true
*/

var parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
     [4, 5], [4, 8], [8, 9]];

var map = new Map();
// 3 --> [1 , 2]
// 6 --> [3, 5]
// 7 --> [5]

function createMapping(relations) {
  //console.log("relations = ", relations[0][1]);
  var parentArr = [];
  for(var i = 0; i < relations.length; i++) {
    var parent = relations[i][0];
    var child = relations[i][1];
    if(!map.get(child)) {
        map.set(child, [parent]);
    } else {
      var arr = [parent];
      arr.push(map.get(child));
      map.set(child, arr);
    }
  }
  return map;
}

function isRelated(map, pair1, pair2) {
   //get entries for pair given
  var ancestor1 = map.get(pair1);
  var ancestor2 = map.get(pair2);

  var ancestors = [];
  for (var i = 0; i < ancestor1.length; i++) {
    if(map.get(ancestor1[i])) {
      isRelated(map, ancestor1[i], pair2);
    } else {
      ancestors.push(ancestor1[i]);
    }
  }

  for (var i = 0; i < ancestor2.length; i++) {
    if(map.get(ancestor2[i])) {

      isRelated(map, ancestor2[i], pair1);
    } else {
      if(ancestors.indexOf(ancestor2[i]) !== -1) {
        return true;
      }
      ancestors.push(ancestor2[i]);
    }
  }

  //find if there are duplicate ancestors

  return false;
}

//console.log(createMapping(parentChildPairs));
console.log(isRelated(createMapping(parentChildPairs), 3, 8));
