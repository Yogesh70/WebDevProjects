let words = ['spray', 'limit', 'elite', 'explosion', 'destructure'];
// Get words whose char length is greater than 6

// traditional
// let nArr = [];
// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length > 6) {
//         nArr.push(word);
//     }
// }
// console.log(nArr);


// filter
let nArr = words.filter(function (item) {
    // console.log(item)
    return item.length > 6;
});
console.log(nArr);