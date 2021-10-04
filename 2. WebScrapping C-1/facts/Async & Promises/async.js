let fs = require('fs');

// sync code -> top to bottom, left to right
// async -> javascript -> sync lang -> async with the help of callbacks

console.log('Before');

fs.readFile('./f1.txt', cb); // start reading file

function cb(error, data) {
    console.log('Content ' + data);
}

console.log('After');
console.log('After');
console.log('After');

while (true) {
    // infinite loop
    // due to this infinite loop execution stack will never be empty hence cb func. won't return the data
}