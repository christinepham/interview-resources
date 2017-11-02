function add (x, y) {
	return x + y;
} 

var addFast = memoize(add);
var multFast = memoize(mult);

addFast(3, 4) // --> 7
addFast(3, 4) // --> 7, true
addFast(4, 3) // --> 7, false
addFast(4, 5) // --> 9, false 
addFast() // --> 

/*
	- if it takes arguments
	- limit on arguments
	- use a map for hashing --> O(1) for insert and searching
	- 
*/

function memoize(func) {

	return function(...args) {
		var get = caches.get(...args);
		
		//arguments haven't been cached
		if (!get) {
			get = func(...args);
			caches.put(...args, get); //key, value
		} 

		return get;
		
	}
}
