let arr = [1, 2, 3, 4, 5, 6];
// double each elem of the array
// new array

// traditional

// let nArr = [];
// for (let i = 0; i < arr.length; i++) {
//     nArr[i] = 2 * arr[i];
// }
// console.log(nArr);

// map
// returns a new array
let nArr = arr.map(function (item) {
    return item * 2;
})
console.log(nArr);
console.log(arr);
