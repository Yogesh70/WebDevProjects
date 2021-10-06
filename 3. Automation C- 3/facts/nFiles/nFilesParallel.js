let fs = require('fs');

let files = ['../f1.txt', '../f2.txt', '../f3.txt'];

// parallely,  loops,  promises

for (let i = 0; i < files.length; i++) {
    let filePendingPromise = fs.promises.readFile(files[i]);
    filePendingPromise.then(function (data) {
        console.log('Content of file ' + data);
    })
}