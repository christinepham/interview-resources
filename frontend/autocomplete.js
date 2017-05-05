/*
 * Exercise: Implement a simple autocomplete function for the input box.
 * For example, if the user were to type "a" in the "#name-complete" box, 
 * the UI would suggest 'aaron' and 'adam'.
 */

/*
 * API 
 */
// GET /names?query=a  //=> ['aaron', 'adam']


/*
 * HTML 
 */

// <input id="name-complete" onkeyup="displayMatch(this.value)" type=”text”>
// <ul id="names">
// </ul>

/*
 * JS
 */ 


// the api call, retrieves all the names
function getPerson(letter) {
  $.get('/names?query=' + letter, function (data) {
    return data;
    //data = ['aaron', 'adam']
  });
}

// the function that displays onto html
// select list item and put into html
function displayMatch(value) {
  var list = document.getElementById("names");
  var result = getPerson(value);
  $.each(result, function (index, name) {
    var entry = document.createElement('<li>');
    entry.appendChild.appendTextNode(name);
    entry.createElement('</li>');
    
    list.appendChild(entry);
  });
  
}

function chosenName() {
  var attach = document.getElementById("name-complete").innerHTML;
  attach = document.getElementById("names").value;
}
