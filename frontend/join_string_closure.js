// Write a function that if invoked by
// joinString(‘Hello’)(‘World’)
// would return ‘Hello World’.


// . joinString(‘Hello’)(‘World’)
// ===============================
//   var r1 = joinString(‘Hello’);
//   var r2 = r1('World')
// . var r3 = doSomething('hey')
//

function joinString(string) {

  function join(string2) {
    return string + ' ' + string2;
  }
  return join;
}

var r1 = joinString('Hello');
var r2 = r1('World');
console.log(r2);
