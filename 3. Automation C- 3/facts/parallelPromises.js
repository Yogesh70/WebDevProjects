// async, promises, parallely 
let fs = require('fs');

console.log('Before');

let f1PendingPromise = fs.promises.readFile('./f1.txt');
let f2PendingPromise = fs.promises.readFile('./f2.txt');
let f3PendingPromise = fs.promises.readFile('./f3.txt');


f1PendingPromise.then(scb);
f1PendingPromise.catch(fcb);


f2PendingPromise.then(scb);
f2PendingPromise.catch(fcb);


f3PendingPromise.then(scb);
f3PendingPromise.catch(fcb);

console.log('After');

function scb(data) {
    console.log('Content ' + data);
}

function fcb(error) {
    console.log(error);
}