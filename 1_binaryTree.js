// Binary Tree
// - at most 2 children per node
// - exactly 1 root
// - exactly 1 path b/w root and any node
/*
              node
                A   
   node.left  /   \  node.right
      child  B      C  child/node
           / \        \
          D   E        F  
        leaf   leaf    leaf node
*/

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;