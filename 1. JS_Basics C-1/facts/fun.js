// function -> 

// ------------------------------------------

// function body
function sayHi(fun) {
    console.log("sayHi says Hi!!");
    fun();
    // return 10;
}

function myFun() {
    console.log('Myfun says hi!!');
}

sayHi(myFun);

// -------------------------------------------

// function call

// let val = sayHi("Steve");
// console.log(val);
// console.log(sayHi);

// function are variables
let fun = function() {
    console.log('fun says Hi!!');
}
// fun();

// variables can be passed as a parameter
// function can be passed as a parameter