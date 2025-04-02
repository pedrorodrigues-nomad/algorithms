/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let ahead = head

    while (ahead && ahead.next) {
        ahead = ahead.next.next
        head = head.next
    }

    return head
    
};

console.log(middleNode([1,2,3,4,5]))
console.log(middleNode([1,2,3,4,5,6]))
console.log(middleNode([1]))
console.log(middleNode([]))
console.log(middleNode([1,2]))