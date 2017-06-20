var hue;
var count = 1;
var repeat = setInterval(function () {
	hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	if (count < 10) { 
		document.body.style.backgroundColor = hue; 
		count++ 
	} else { 
		clearInterval(repeat);
	} 
}, 1000);