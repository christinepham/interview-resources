* Leetcode questions - [Github - Paopao2](https://github.com/paopao2/leetcode-js)

* **Name some CSS position properties and what they mean** (*source*: [w3schools-pr_class_position](https://www.w3schools.com/cssref/pr_class_position.asp))
  * *Static* - default value, elements render in order as they appear in the document flow
  * *Absolute* - The element is positioned relative to its first positioned (not static) ancestor element
  * *Fixed* - The element is positioned relative to the browser window
  * *Relative* - The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position
  * *Sticky* - The element is positioned based on the user's scroll position
    A sticky element toggles between relative and fixed, depending on the scroll position. 
    It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
  * *Initial* - Default Value
  * *Inherit* - Inherits property from parent element

* **Name some CSS selectors** (*source*: [w3schools-css_selectors](https://www.w3schools.com/cssref/css_selectors.asp))
  * `element > element` - `div > p` Selects all `<p>` elements where the parent is a `<div>` element
  * `element element` - `div p` Selects all `<p`> elements inside `<div>` elements
  * `element1 ~ element2` - `p ~ ul` Selects every `<ul>` element that are preceded by a `<p>` element
  
* **Name some HTML DOM elements** (*source*: [w3schools-dom_obj_all](https://www.w3schools.com/jsref/dom_obj_all.asp))
  * `element.childNodes` - Returns a collection of an element's child nodes (including text and comment nodes)
  * `element.firstChild` - Returns the first child node of an element
  * `element.removeChild()` - Removes a child node from an element
  
* **What does the HTML DOCTYPE Tag reference?** (*source*: [w3schools-tag_doctype](https://www.w3schools.com/tags/tag_doctype.asp))
  * The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.
  * The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
  
* **What is the difference between a GET and a POST?** (*source*: [w3schools-ref_httpmethods](https://www.w3schools.com/TAGs/ref_httpmethods.asp) or Stack Overflow - diff between post and get](http://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get))
  ###### GET
  * Requests data from a specified resource
  * Query string is in the url of the request (i.e. /test/demo_form.php?name1=value1&name2=value2)
  * Can be cached
  * Only ASCII characters
  
  ###### POST
  * Submits data to be processed to a specified resource
  * Query string (name/value pairs) is sent in the HTTP message body of a POST request
  * Cannot be cached
  * No restrictions on data type
 
* **What is the difference when sending GET or POSTS through an AJAX call?** (*source*: [w3schools-ajax_xml](https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp))
  * open(method, url, async) would look like `xhttp.open("GET", "ajax_info.txt", true);`
  
* **Name some JavaScript data types** (*source*: [Mozilla-Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) or [w3schools-datatypes](https://www.w3schools.com/js/js_datatypes.asp))
  * Boolean
  * Null
  * Object
  * String
  
* **Name some REST calls and what they do** (*source*: [spring-REST](https://spring.io/understanding/REST))
  * REST is an architectural style for designing distributed systems
  ###### PUT
  * Store an entity at a URI. PUT can create a new entity or update an existing one. 
  
  ###### PATCH
  * Update only the specified fields of an entity at a URI.
  
  ###### DELETE
  * Request that a resource be removed; however, the resource does not have to be removed immediately. 
  
* **What are some common HTTP Status Codes?** (*source*: [spring-REST](https://spring.io/understanding/REST))
  * *1XX* - informational
  * *2XX* - success
  * *3XX* - redirection
  * *4XX* - client error
  * *5XX* - server error

* **Explain Benefits of MVC Patterns (i.e. using frameworks like AngularJS)?** (*source*: [Career Ride - MVC benefits](http://www.careerride.com/MVC-benefits.aspx))

* **How do you optimize page loading?** (*source*: [woo rank - page load time](https://www.woorank.com/en/edu/seo-guides/page-load-time))

* **What is Reflow?** (*source*: [Stack Overflow - What is Dom Reflow](http://stackoverflow.com/questions/27637184/what-is-dom-reflow))

* **Do you know what a promise is?** (*source*: [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve))

* **How would you fix an asynchronous call?** (*source*: [Staying Sane with Async Promises](http://colintoh.com/blog/staying-sane-with-asynchronous-programming-promises-and-generators) or
[Async Javascript](https://blog.risingstack.com/asynchronous-javascript/))

* **How would you make an autocomplete perform faster?** (*source*: [How to build fast client side searches](http://code.flickr.net/2009/03/18/building-fast-client-side-searches/))

* **What is a Service?** (*source*: [AngularJS - Docs](https://docs.angularjs.org/guide/services))

* **Which area of the MVC would you do Dom Manipulation?** (*source*: [Dom - Manipulation](http://ng-learn.org/2014/01/Dom-Manipulations/))

* **What's the difference between Cookies, Local Storage and Session Storage** (*source*: [Quora](https://www.quora.com/What-is-the-difference-between-sessionstorage-localstorage-and-Cookies))

* **What are your thoughts about Angular 1 vs. Angular 2?** (*source*: [Quora](https://www.quora.com/What-is-the-difference-between-AngularJs-and-Angular-2) or [DZone](https://dzone.com/articles/typed-front-end-with-angular-2))

* **What is the difference between Call and Apply?** (*source*: [Difference between Call & Apply](https://hangar.runway7.net/javascript/difference-call-apply))

* **What is Immediate Invoked Function Expression (IIFE)?** (*source*: [codeburst](https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18))

* **Example of JavaScript Closure with SetTimeout** (*source*: [brackets: curly](http://brackets.clementng.me/post/24150213014/example-of-a-javascript-closure-settimeout-inside))

* **What do the following produce**
```js
function generate(seed) {
	var private = seed;
	return function(param) {
		private += seed;
		return private + param;
	};
}
var a = generate(1)
var b = generate(2)
var c = a(1) + a(2) + b(3) + b(4)
```

```js
var calc2 = (z) => z * 10;

var calc1 = (x,y) => {
  return (x * y) + calc2(x);
};

A. calc1(2,3); //good
B. var values = [2,3];
calc1.apply(this,values); //good
C.	var values = [2,3];
calc1.apply(values);
D.	calc1.call(this,2,3); //good
E.	calc1.call(2,3);
```

```js
var w = new WeakMap();
var o1 = {}, o2 = {};
var o3 = function() {}, o4 = function() {};

w.set(o1, 100);
w.set(o2, 200);
w.set(o3, 'blue');
w.set(o4, 'red');

var color;

color = w.get(o3);
```

* **For the JavaScript code snippet below, which of the following correctly identify the number of properties of the student object?**
var student = new Object({type:"student"});

function setvals(s) {
    s.name = "John";
    s.age = 15;
    s.id = 100;
}
setvals(student);

* **Which of the following are valid values for the outcome variable after executing the JavaScript code snippet below?**
someText = 'JavaScript1.2';
pattern = /(\w+)(\d)\.(\d)/i;
outcome = pattern.test(someText);

* **Which of the following are valid outputs of executing the JavaScript code snippet below?**
```js
var y;
function modifyVariables(x) {
 var z = 5;
 x += 2;
 y += x + z;
}

var x = 1;
var y = 2;
var z = 3;
modifyVariables(x);
document.writeln(x);
document.writeln(y);
document.writeln(z);
```

* **What does this produce**
```js
var total=0;
for (var x = 1; x < 5; x = x << 1) {
   total += x;
} 
document.write(total);
```

```js
var list = new Map();

list.set("Cat in the Hat",10);
list.set("Green Eggs and Ham",20);

var book = { name: "Alice in Worderland" };
list.set(book,30);

console.log(list.entries());
```

```js
var x = 9;
x = x >> 2;
x = x << 2;
x = x ^ 3; 
document.writeln(x);
```

*  **Which of the following correctly identify the full output of executing the JavaScript code snippet below?**
```js
let propBar = "bar1";
let b2 = "bar2";

class Class1 {
   set [propBar](val) {
     this.value = val;
   }
}

let class2 = new Class1();
console.log(class2.value);

class2.bar1 = b2;
console.log(class2.value);
```

* **Which of the following statements are correct, given the JavaScript code snippet below?**
```js
function Test() { this.prop1 = "a"; }

Test.prototype.prop2 = "b";
var a = new Test();
var b = new Test();
/* POINT 1 */

Test.prototype.prop2 = "c";
/* POINT 2 */

a.prop1 = "d";
a.prop2 = "e";
/* POINT 3 */

Test.prop2 = "h";
/* POINT 4 */
A.	The value of a.prop2 at POINT 1 is "b".
B.	The value of b.prop2 at POINT 3 is "e".
C.	The value of b.prop2 at POINT 4 is "h".
D.	The value of b.prop2 at POINT 2 is "b".
E.	The value of b.prop2 at POINT 4 is "c".
```

* **The JavaScript code snippet below is inside a web page. This page will have an iframe element inside the div element with id "demo" where a series of pages (demo1.html, demo2.html, demo3.html, demo4.html) will be shown in sequence every 10 seconds. Which of the following replace **A**, **B** and **C** to provide the expected result?**

```html
<p>These are our demo pages</p>
<div id="demo"></div>
<script>
    (function() {
        var cycle = ['ikm_07_02b.html','ikm_07_02c.html','ikm_07_02d.html'];
        var active = 0;
        var iframe = document.createElement('iframe');
        iframe.frameBorder=0;
        iframe.width="600px";
        iframe.height="300px";
        **A**;
        function slideFrame() {
            **B**;
            active = (active == cycle.length-1)?0:active+1;
        }
        slideFrame();
        **C**;
    })();
</script>
A.	Replace B with iframe.setAttribute("src", cycle[active]).
B.	Replace B with iframe.setAttribute("href", cycle[active]).
C.	Replace C with setInterval(function() { slideFrame(); }, 10000).
D.	Replace A with document.getElementById("demo").appendChild(iframe).
E.	Replace A with document.frames.add(appendChild(iframe)).
```
  
