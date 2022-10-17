const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.ROOT = null; 
  }

  root() {
    return this.ROOT;
  }

  add(data) {
    let newNode = new Node(data);
                  
    if(this.ROOT === null)
        this.ROOT = newNode;
    else
       
        this.insertNode(this.ROOT, newNode);
  }
  
  insertNode(node, newNode){
   
    if(newNode.data < node.data)
    {
        
        if(node.left === null)
            node.left = newNode;
        else
           
            this.insertNode(node.left, newNode);
    }
 
    
    else
    {
       
        if(node.right === null)
            node.right = newNode;
        else
           
            this.insertNode(node.right,newNode);
    }
  }

  has(data) {
    return !!this.find(data);

  }

  find(data) {
    return this.search(this.ROOT, data);

  }

  search(node, data){
      if(node === null)
          return null;
         else if(data < node.data)
          return this.search(node.left, data);
         else if(data > node.data)
          return this.search(node.right, data);
         else
          return node;
  }

  remove(data) {
    this.ROOT = this.removeNode(this.ROOT, data);

  }
  removeNode(node, key){     
    if(node === null)
        return null;
     else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
     else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
     else
    {
       if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
      if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
         let aux = this.findMinNode(node.right);
        node.data = aux.data;
  
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
  }
   
  min() {
    return this.findMinNode(this.ROOT).data;
  }

  max() {
    return this.findMaxNode(this.ROOT).data;

  }
  
  findMinNode(node){
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }

  findMaxNode(node){
    if(node.right === null)
        return node;
    else
        return this.findMaxNode(node.right);
  }
  }

module.exports = {
  BinarySearchTree
};