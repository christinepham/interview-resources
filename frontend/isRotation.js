/* Assume you have a method isSubstring which checks if one word is a substring of another. 
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only 
one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”). */

function isSubstring(origStr, sub) {
  return origStr.includes(sub); 
}

function isRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false; 
  }

  var addedString = s1 + s1;
  
  if (isSubstring(addedString, s2)) {
    return true; 
  }
  return false;
}

var s1 = 'waterbottle';
var s2 = 'erbottlewat';

var s3 = '';
var s4 = 'act';

console.log(isRotation(s1, s2));
console.log(isRotation(s3, s4));
