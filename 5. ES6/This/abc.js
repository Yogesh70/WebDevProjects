// this is a keyword that particularly refers to an object
// the value of this would change according to the context in which it is being referred to

// let name = "Yogesh";
// console.log(name);

// console.log(this);
// window

// we need this for only function calling

function fn() {
    console.log(this);
    console.log(`Hi my name is ${this.person}`);
}

// normal call
// fn();
//  In normal call the value of this is passed as window object


/**
 * 1. for any function the value of this depends on the way function is called
 *      In normal call the value of this is passed as window object
 * 2. Globally the value of this is window object
 * 3. window object is created in Global execution context
 */

let obj = {
    person: "Yogesh",
    func: fn
}
// function call with object
obj.func();
// in this case the value of this is equal to the object through which the fn is called


let ret = obj.func;
ret();
// in this case the this again passed as the window object.
