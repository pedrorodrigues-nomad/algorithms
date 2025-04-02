/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newList = null;

  while (head) {
    nextNode = head.next;
    head.next = newList;
    newList = head;
    head = nextNode;
  }
  return newList;
};


console.log(reverseList([1, 2, 3, 4, 5]))
console.log(reverseList([1, 2]))
console.log(reverseList([]))
