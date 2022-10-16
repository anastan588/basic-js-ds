const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    let node = this.find(data);
    return !!node;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let min = this.nodeRoot;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.nodeRoot;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
  }

module.exports = {
  BinarySearchTree
};