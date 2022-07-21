/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    this.child = null;
  }
}

const linkedList2 = [4, 3].reduce((acc, val) => new ListNode(val, acc), null);

const linkedList1 = [5, 2, 1].reduce((acc, val) => {
  let node = new ListNode(val, acc);
  if (val === 2) node.child = linkedList2;
  return node;
}, null);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

var flatten = function (head) {
  const nexts = [];
  let previousNode = null,
    currentNode = head;

  while (currentNode || nexts.length) {
    console.log("prev ", previousNode);
    console.log("curr ", currentNode);
    previousNode = currentNode;
    if (currentNode.child) {
      if (currentNode.next) nexts.push(currentNode.next);
      let child = currentNode.child;
      currentNode.child = null;
      currentNode.next = child;
      child.prev = currentNode;
    }
    currentNode = currentNode.next;

    if (!currentNode && nexts.length) {
      previousNode.next = nexts.pop();
      previousNode.next.prev = previousNode;
      currentNode = previousNode.next;
    }
    console.log(nexts);
  }
  console.log("=========================================================");
  return head;
};

/**
 * Another solution without using the "nexts" array
 * 
 * var flatten = function (head) {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
}; 
 * */

printList(flatten(linkedList1));
// flatten(linkedList1);
