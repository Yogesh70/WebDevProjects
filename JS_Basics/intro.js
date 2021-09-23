// C++, Java -> entry point

// JavaScript -> no entry point
// top to down , left to right

console.log('Hello world!!');

// datatypes -> Number, boolean, undefined, null, string, object

// ES5 syntax -> var
// ES6 syntax -> const, let

// let -> block scoped var
let a = 12;
a = 34;
let b = 12.34;
let c = 'abslds';
let d = 'flasjdljdf';

// const -> block scoped var -> constant
// declaration and initialization at the same time
const pi = 3.14;

// reinitialisation not allowed

// array
let arr = [12, 43, [12, 34.22, ['jalsd']], true, false, 123.43];
// console.log(arr)

// objects -> key: value

let obj = {
    id: "1",
    name: "sanpai",
    movies: ["dr. strange, thor"],
    key: 'dfasdd'
}

// dot notation -> literally match key -> notation used when we know the key 
// console.log(obj.movies);

let key = 'name';
// console.log(obj.key); (undefined)

// bracket notation -> notation used when key is unknown
console.log(obj[key]);

// == && ===
// 15 == '15' -> true  (check value only)
// 15 === '15' -> false  (check value as well as datatype)