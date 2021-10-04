let fs = require('fs');

// sync code -> top to bottom, left to right
// async -> 

console.log('Before');

// web data
let f1Data = fs.readFileSync('./f1.txt');  // 100gb
console.log('Content ' + f1Data);

console.log('After');
console.log('After');
console.log('After');
console.log('After');
console.log('After');
console.log('After');