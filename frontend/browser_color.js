function load_colors() {
	var colors = [];
	var hue;
	while (colors.length < 10) {
		hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		if (!colors.includes(hue)) {
			colors.push(hue);
		}
	}
	return colors;
}

function browser_color() {
	var colors = load_colors();
	var count = 0;
	var repeat = setInterval(function() {
		if (count < 10) {
			document.body.style.backgroundColor = colors[count];
			count++;
		} else {
			clearInterval(repeat);
		}
	}, 1000);
}

browser_color();