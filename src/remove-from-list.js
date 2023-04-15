const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const l = convertArrayToList([1, 2, 3, 4, 7, 3, 2]);
console.log(l);

function removeKFromList(l, k) {
  if (l === null) {
    return l;
  }

  let current = l;
  let prev = null;

  console.log(current, "current");

  while (l) {
    if (l.value === k && prev === null) {
      current = l = l.next;
      continue;
    } else if (l.value === k && prev !== null) {
      prev.next = l.next;
      l = l.next;
      continue;
    }
    prev = l;
    l = l.next;
  }
  return current;
}

console.log(removeKFromList(l, 2));

module.exports = {
  removeKFromList,
};
