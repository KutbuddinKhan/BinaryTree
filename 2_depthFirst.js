// Depth First

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Iterative method:
const depthFirstValues = (root) => {
    if (root === null) return [];

    const stack = [root];  // [ null ]
    const result = [];  

    while (stack.length > 0) {
        const current = stack.pop();
        // console.log(current.val);
        result.push(current.val);

        // short hand:
        // if (current.left) stack.push(current.left);
        // if (current.right) stack.push(current.right);
        
        if (!!current.right) {
            stack.push(current.right);
        }
        if (!!current.left) {
            stack.push(current.left);
        }
    }
    return result;
};

// Recursive method:
const recursiveDepthFirstValue = (root) => {
    if (root === null) return [];

    const leftValues = recursiveDepthFirstValue(root.left); // [b, d, e]
    const rightValues = recursiveDepthFirstValue(root.right); // [c, f]
    
    return [ root.val, ...leftValues, ...rightValues ]
};

const peeps = ['phelipe', 'jason', 'raj', 'abby']
const newPeeps = ['alvin', ...peeps, 'brian']
console.log(newPeeps);  //-> [ 'alvin', 'phelipe', 'jason', 'raj', 'abby', 'brian' ]


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
// depthFirstValues(a);
console.log(`Depth first values: ${depthFirstValues(a)}`);
console.log(`Recursive Depth first values: ${recursiveDepthFirstValue(a)}`);