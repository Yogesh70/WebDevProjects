let fs = require('fs');

let files = ['../f1.txt', '../f2.txt', '../f3.txt'];

// serially,  loops,  promises

let f1PendingPromise = fs.promises.readFile(files[0]);

for (let i = 1; i < files.length; i++) {
    f1PendingPromise = f1PendingPromise.then(function (data) {
        console.log('Content = ' + data);
        let nextFilePromise = fs.promises.readFile(files[i]);
        return nextFilePromise;
    })
}

f1PendingPromise.then(function (data) {
    console.log('Content = ' + data);
})