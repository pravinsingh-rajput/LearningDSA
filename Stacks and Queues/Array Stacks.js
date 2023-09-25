// Stack => First In Last Out

// One way of Implementing
const Stack1 = [];

// Push
Stack1.push("First");
Stack1.push("Second");
Stack1.push("Third");
Stack1.push("Four");
Stack1.push("Five");

console.log(Stack1);

// pop
console.log(Stack1.pop());

//////////////////////////////////////

// Another way of Implementing
const Stack2 = [];

// Push
Stack2.unshift("First");
Stack2.unshift("Second");
Stack2.unshift("Third");
Stack2.unshift("Four");
Stack2.unshift("Five");

console.log(Stack2);

// pop
console.log(Stack2.shift());
