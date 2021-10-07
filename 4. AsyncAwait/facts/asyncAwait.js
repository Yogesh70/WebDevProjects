// await keyword needs a async function -> So that the async function runs at Node API

let fs = require('fs');

console.log('start');
async function fun() {
    // code will run serially
    try {
        let f1Data = await fs.promises.readFile('./f1.txt', 'utf-8');
        console.log(f1Data);

        let f2Data = await fs.promises.readFile('./f2.txt', 'utf-8');
        console.log(f2Data);
    }
    catch (error) {
        console.log(error);
    }
}

fun();

console.log('end');
console.log('end');
console.log('end');
console.log('end');


// function -> IIFE
// Immediately Invoked Function Expression
// IIFE -> self invoke/call
(async function () {
    try {
        let f1Promise = fs.promises.readFile('./f1.txt', 'utf-8');
        let f2Promise = fs.promises.readFile('./f2.txt', 'utf-8');
        
        let bothFileData = await Promise.all([f1Promise, f2Promise]); // serially
        console.log(bothFileData);
    }
    catch (error) {
        console.log(error);
    }
})();