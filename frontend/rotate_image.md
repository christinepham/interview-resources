```js
var index = 0;

function loopThroughImages() {
    var images = document.getElementsByTagName('img');
    index = (index + 1) % images.length;
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
}

setInterval(loopThroughImages, 3000);
```

```html
<!DOCTYPE html>
<html>
<head>
	<title>Digital Picture Frame</title>
</head>
<body>

	<div id="slideshow">
      <img src="a" style="display: block" />
      <img src="b" style="display: none" />
      <img src="c" style="display: none" />
      <img src="d" style="display: none" />
      <img src="e" style="display: none" />
    </div>
  	<div>
      <button id="next">Next</button>
  </div>
 
</body>
</html>
```
