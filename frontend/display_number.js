function displayNumber(n) {
  console.log(n)

  if(n < 5) {
    setTimeout(function() { displayNumber(n + 1); }, 1000);
  }
}


// with closure
function displayNumber() {
  for (var i = 1; i <= 5; i++) {
    window.setTimeout(
      function(n) {
        return function() {
          console.log(n);
        }
      }(i)
    , 1000*i);
  }
}