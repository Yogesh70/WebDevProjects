// async, promises, serially
let fs = require('fs');

console.log('Before');

let f1PendingPromise = fs.promises.readFile('./f1.txt');

// Promise Hell => chaining

f1PendingPromise.then(function (data) {
    console.log('Content ' + data);

    let f2PendingPromise = fs.promises.readFile('./f2.txt');
    f2PendingPromise.then(function (data) {
        console.log('Content ' + data);

        f3PendingPromise.then(function (data) {
            console.log('Content ' + data);
        })
        f3PendingPromise.catch(function (error) {
            console.log(error);
        })
    })
    f2PendingPromise.catch(function (error) {
        console.log(error);
    })
})
f1PendingPromise.catch(function (error) {
    console.log(error);
})

console.log('After');