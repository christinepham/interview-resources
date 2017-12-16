Solution 1
```javascript
var numChar = 200;
var more = "more";

$('.content').each(function () {
  var text = $(this).html();
  var oldThis = this;

  if(text.length > numChar) {
    var hide = text.substring(0, numChar);
  
    var html = hide + '<p>...' + '<a href="#" class="moreLink">' + more + '</a></p>';
  
    $(this).html(html);
  }
  
  $('.moreLink').click(function () {
    if($(this).hasClass('moreLink')) {
      $(this).removeClass('moreLink');
      //put back in text
      $(oldThis).html(text);
    }

 });
});
```
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <p class="content">
   Hello, my  name is Christine and I'm currently working on this code that will only
    show the first 200 characters of a paragraph. The rest of it will be hidden unless
    you click 'more'. ABCDEFGHIJKL ABCDEFGHIJK ABCDEFGHIJK 
    ABCDEFGHIJKABCDEFGHIJKL ABCDEFGHIJKL ABCDEFGHIJKL
    END
  </p>
</body>
</html>
```

Solution 2
```javascript
function displayText(text) {
	var getElement = document.getElementById("text");
	var node = document.createTextNode(text.substring(0, 200));
  var rest = document.createTextNode(text.substring(200, text.length));
  
  var button = document.createElement("BUTTON");
  button.appendChild(document.createTextNode("more"));
  
	getElement.appendChild(node);
 	getElement.appendChild(button);
  button.onclick = function() {
  	getElement.removeChild(button);
  	getElement.appendChild(rest);
  };
}

var text = "Hello, my name is Christine and I'm currently working on this code that will only show the first 200 characters of a paragraph. The rest of it will be hidden unless you click 'more'. ABCDEFGHIJKL ABCDEFGHIJK ABCDEFGHIJK ABCDEFGHIJKABCDEFGHIJKL ABCDEFGHIJKL ABCDEFGHIJKL END";

displayText(text);
```

```HTML
<div id="text">
</div>
```

Other Rerences: http://jsfiddle.net/Wpn94/, https://www.sitepoint.com/community/t/how-to-create-the-more-link-button-to-display-rest-of-the-text/7437
