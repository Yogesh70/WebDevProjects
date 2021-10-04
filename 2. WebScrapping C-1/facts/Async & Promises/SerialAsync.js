// async, three files, serially read file
let fs = require('fs');

console.log('Before');

// callback Hell
fs.readFile('./f1.txt', function cb(error, data) {
    console.log('Content ' + data);

    fs.readFile('./f2.txt', function cb(error, data) {
        console.log('Content ' + data);

        fs.readFile('./f3.txt', function cb(error, data) {
            console.log('Content ' + data);
        })
    })
})

// Layers
// Callbacks -> Promises -> Async Await

console.log('After');