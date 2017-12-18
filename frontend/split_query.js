// select * from my\\;table;select a, b from "some; other table name";drop table

// [
//     select * from my\\;table
//     select a, b from "some other \table name"
//     drop table
// ]
// [^abc;] --> ;+


var str = "select str from \;table; select str from 'tab;'; hello";

function splitQuery(str) {
  var quoteCount = 0, beg = 0, i = 0;
  var end;
  var queryArr = [];

  for (i = 0; i < str.length; i++) {
    //TODO: find right variation of backslash
    if (str.charAt(i).match("/\\/")) {
      i += 2;
      continue;
    } else if (str.charAt(i) === "'") {
      quoteCount++;
    } else if (str.charAt(i) === ";" && quoteCount%2 === 0 && str.charAt(i-1) !== "'\'") {
      end = i;
      queryArr.push(str.substring(beg, end));
      beg = end + 1;
    } else if (i === str.length - 1) {
      queryArr.push(str.substring(beg + 1, str.length));
    }
  }
  return queryArr;
}

console.log(splitQuery(str));
