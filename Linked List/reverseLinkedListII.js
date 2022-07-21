/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = [5, 3].reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

var reverseList = function (startNode, left, right) {
  let previousNode = null,
    currentNode = startNode,
    nextNode = null,
    i = left;

  while (i < right) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    i++;
  }

  startNode.next = currentNode.next;
  currentNode.next = previousNode;

  return currentNode;
};

var reverseBetween = function (head, left, right) {
  if (!head || head.next === null || left === right) return head;
  let i = 1,
    startNode = head,
    beforeStartNode = null;

  while (i !== left) {
    beforeStartNode = startNode;
    startNode = startNode.next;
    i++;
  }

  let reversedListHead = reverseList(startNode, left, right);

  if (left !== 1) beforeStartNode.next = reversedListHead;
  else head = reversedListHead;

  return head;
};

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 1, 2));
