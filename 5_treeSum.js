class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Recursive method:
const recursiveTreeSum = (root) => {
    if (root === null) return false;

    return root.val + recursiveTreeSum(root.left) + recursiveTreeSum(root.right);
}

const depthTreeSum = (root) => {
    if (root === null) return false;
    
    let totalSum = 0;
    const stack = [ root ];

    while (stack.length > 0){
        const current = stack.pop();
        totalSum += current.val;

        if(current.left !== null) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);
    }
    return totalSum;
}

const breadthTreeSum = (root) => {
    if (root === null) return false;

    let totalSum = 0;
    const queue = [root];

    while (queue.length > 0){
        const current = queue.shift();
        totalSum += current.val;

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return totalSum;
}

const a = new Node(8);
const b = new Node(6);
const c = new Node(5);
const d = new Node(4);
const e = new Node(9);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(`Recursive Sum of Tree: ${recursiveTreeSum(a)}`); // 33
console.log(`Depth first Sum of Tree: ${breadthTreeSum(a)}`); // 33
console.log(`Depth first Sum of Tree: ${depthTreeSum(a)}`); // 33