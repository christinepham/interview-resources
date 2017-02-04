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