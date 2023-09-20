
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Depth first itrative method:
const depthTreeMinValue = (root) => {
    let minValue = Infinity;
    const stack = [ root ];

    while(stack.length > 0){
        const current = stack.pop();
        if(current.val < minValue) minValue = current.val;

        if(current.left !== null) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);
    }
    return minValue;
}

// Recursive mehtod:
const recursiveTreeMinValue = (root) => {
    if(root === null) return Infinity;

    const leftMin = recursiveTreeMinValue(root.left);
    const rightMin = recursiveTreeMinValue(root.right);

    return Math.min(root.val, leftMin, rightMin)
}

const breadthTreeMinValue = (root) => {
    let minValue = Infinity;
    const queue = [root];
    
    while (queue.length > 0){
        const current = queue.shift()
        
        if(current.val < minValue) minValue = current.val;

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return minValue;
}



const a = new Node(8);
const b = new Node(6);
const c = new Node(5);
const d = new Node(4);
const e = new Node(-9);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(`Depth first min value: ${depthTreeMinValue(a)}`);
console.log(`Breadth first min value: ${breadthTreeMinValue(a)}`);
console.log(`recursive min value: ${recursiveTreeMinValue(a)}`);
