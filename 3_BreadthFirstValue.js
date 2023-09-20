class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Iterative method
const breadthFirstValue = (root) => {
    if (root === null) return [];

    const values = [];
    const queue = [ root ];

    while(queue.length > 0){
        const current = queue.shift();

        values.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return values;
}

const recursiveBreadthFirstValue = (root) => {
    if (root === null) return [];

    const leftValue = recursiveBreadthFirstValue(root.left);
    const rightValue = recursiveBreadthFirstValue(root.right);

    return [root.val, ...leftValue, ...rightValue]
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

console.log(`Breadth first values: ${breadthFirstValue(a)}`);
console.log(`Recursive Breadth first values: ${recursiveBreadthFirstValue(a)}`);
