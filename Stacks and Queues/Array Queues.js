// Queues => First In First Out

// One way of Implementing
const Queues1 = [];

Queues1.push("First");
Queues1.push("Second");
Queues1.push("Third");
Queues1.push("Four");
Queues1.push("Five");

console.log(Queues1);

console.log(Queues1.shift());

// Another Way of Implementing
const Queues2 = [];

Queues2.unshift("First");
Queues2.unshift("Second");
Queues2.unshift("Third");
Queues2.unshift("Four");
Queues2.unshift("Five");

console.log(Queues2);

console.log(Queues2.pop());
