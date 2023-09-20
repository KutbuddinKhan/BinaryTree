class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Breadth first:
const breadthFirstTreeIncludes = (root, target) => {
    if (root === null) return false;

    const queue = [ root ];
    while (queue.length > 0){
        const current = queue.shift()
        // console.log(current.val);

        if(current.val === target){
            return true;
        }

        if (current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }
    return false;
}


// Depth first:
const depthFirstTreeIncludes = (root, target) =>{
    if (root === null) return false;

    const stack = [root];
    while (stack.length > 0){
        const current = stack.pop();
        if(current.val === target){
            return true;
        }
        if(!!current.left){
            stack.push(current.left);
        }
        if(!!current.right){
            stack.push(current.right);
        }
    }
    return false;
}

// Using recursion depth first:
const recursiveTreeIncludes = (root, target) => {
    if (root === null) return false;

    if (root.val === target) return true;
    
    return recursiveTreeIncludes(root.left, target) || recursiveTreeIncludes(root.right, target);
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// BreadthFirstTreeIncludes(a, "e");

console.log(`Breadth first Tree includes: ${breadthFirstTreeIncludes(a, "e")}`);
console.log(`Depth first Tree includes: ${depthFirstTreeIncludes(a, "z")}`);
console.log(`Recursive Tree includes: ${depthFirstTreeIncludes(a, "d")}`);
