// function fn() {
//     console.log(`Hi my name is ${this.person}`);
//     function abc() {
//         console.log(`Hi my name is ${this.person}`);
//     }
//     abc();
// }

// let obj = {
//     person: "Yogesh",
//     func: fn
// };

// obj.func();

// ////////////////////////// solution1 (Bind)
// Bind is a function that is defined on other functions
// let ret = fn.bind(argument)
// bind returns a new function whose definition is similar to the function on which it is called 
// and whose this is explicitely set equals to the argument that is passed

// function fn() {
//     console.log(`Hi my name is ${this.person}`);
//     function abc() {
//         console.log(`Hi my name is ${this.person}`);
//     }
//     let ret = abc.bind(this);
//     ret();
// }

// let obj = {
//     person: "Yogesh",
//     func: fn
// };

// obj.func();

///////////////////////////// solution2 (Arrow Function)
// let identifier = (/* arguments if any */) => {

// }

// Arrow func.turns its this to the this of lexicographical scope(outside that func./ scope of func.)
function fn() {
    console.log(`Hi my name is ${this.person}`);
    let abc = () => {
        console.log(`Hi my name is ${this.person}`);
    }
    abc();
}

let obj = {
    person: "Yogesh",
    func: fn
};

obj.func();
