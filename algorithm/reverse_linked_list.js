/ please define a linked list Node
// 1->2->3

var node = {
    data: null,
    next: null
}


// please write a method to reverse a linked list in place

function reverseLinkedList( head ) {
    var next = null;
    var last = null;
    var curr = head; //so you don't change the value
    
    //base case
    if (curr === null) {
        return null;
    } else if (curr.next === null) { //only one value exists
        return curr; 
    }

    while (curr && curr.next !== null) {
        next = curr.next; //next = 2, 3
        curr.next = last; //curr.next = null, 1
        last = curr; //last = 1, 2
        curr = next; //curr = 2, 3
    }
    
    curr.next = last;
    return curr;
}
