function lastCharacterIsCapital(str) {
    
    if (str === null) {
        return false;
    } else if (str.length <= 0) {
         return false;   
    } 
    var regex = /[A-Z]/;
    var lastChar = str.slice(-1);


    return regex.test(lastChar);
}

var test1 = "Hello"; //false
var test2 = "hI";  //true
var test3 = null; //false
var test4 = ""; //false
var test5 = "HELLO"; //true;
var test6 = "foo foo   foo"; //false
var test6 = "foo foo foO"; //true
var test7 = "B"; //true
var test8 = "a"; //false
var test9 = "////"; //true
