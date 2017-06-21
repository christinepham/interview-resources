function browser_color(){
	var colors = [];
	var repeat = setInterval(function() {
		var hue;
		hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		if (colors.length < 10) {
			if (!colors.includes(hue)) {
				colors.push(hue);
				document.body.style.backgroundColor = hue;
			}
		} else { 
			clearInterval(repeat);
		} 
	}, 1000);
}

browser_color();