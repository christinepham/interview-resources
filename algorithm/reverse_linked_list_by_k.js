// please write a method to rotate a linked list by k steps
// 1->2->3->4, k = 2
// output: 3->4->1->2

function reverseLinkedListByK( head, k ) {
    var curr = head;
    
    if (curr === null) {
        return null;
    } else if (curr.next === null) {
        return curr;
    }
    
    var count;
    // loop ends at the kth node
    while (curr !== null && count < k) {
        count++;
        curr = curr.next;
    }
    
    var kth = curr; // 2
    // move to the end of the list
    while (curr.next !== null) {
        curr = curr.next; //ends at 4
    }
    
    // change the last node to the prev head
    curr.next = head; //4->1
    
    head = kth.next; //head = 3
    kth.next = null;
    
    return head;
    
}
