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
  
* **What is the difference between a GET and a POST?** (*source*: [w3schools-ref_httpmethods](https://www.w3schools.com/TAGs/ref_httpmethods.asp))
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
  
