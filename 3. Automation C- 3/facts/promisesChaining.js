// async, promises, serially
let fs = require('fs');

console.log('Before');

// Promise Hell => chaining

        // 2k 
let f1PendingPromise = fs.promises.readFile('./f1.txt');

// 10k => pending              // 2k.then
let thenPendingPromise = f1PendingPromise.then(function (data) {
    console.log('Content ' + data);
})
    thenPendingPromise.then(function () {
        let f2PendingPromise = fs.promises.readFile('./f2.txt');
        return f2PendingPromise;
    })
    .then(function (data) {  // Here then is attached to f2PendingPromise
        console.log('Content ' + data);
    })
    .then(function () {     // Here then is attached to previous then
        f3PendingPromise = fs.promises.readFile('./f3.txt');
        return f3PendingPromise;
    })
    .then(function (data) {
        console.log('Content ' + data);
    })

console.log('After');