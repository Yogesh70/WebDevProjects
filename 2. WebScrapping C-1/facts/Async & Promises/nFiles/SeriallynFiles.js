// async, n-files, serially read
let fs = require('fs');

let files = ['../f1.txt', '../f2.txt', '../f3.txt'];

console.log('Before');

fs.readFile(files[0], cb);

for (let i = 1; i < files.length; i++) {
    function cb(error, data) {
        console.log("Content " + data);

        fs.readFile(files[i], function (error, data) {
            console.log("Content " + data);
        });
    }
}

console.log('After');