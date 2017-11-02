Write a function that accepts an ordered array that has been rotated. The function should return the 0-based index where the fold is. 

* Input: [14, 17, 3, 6, 8, 9] --> [14, 17, 3] [6, 8, 9] --> 14 & 6
* Output: 2
* Input: [13, 16, 20, 25, 3] --> [13, 16, 20] [25, 3] --> 13 & 25
* Output: 4

function rotatedArray(arr) {
	var index = 0;

	for(var i = 0; i < arr.length - 1; i++) {
		if (arr[i+1] < arr[i]) {
			index = i;
			break;
		}
	}

	return index + 1;
}

