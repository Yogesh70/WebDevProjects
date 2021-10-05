let fs = require('fs');

// promisified function
function myPromise(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        })
    })
}


let pendingPromise = myPromise('./f1.txt');
console.log(pendingPromise);

// success callback
pendingPromise.then(function (data) {
    console.log('inside then');
    console.log('Content ' + data);
})

// failed callback
pendingPromise.catch(function (error) {
    console.log(error);
})