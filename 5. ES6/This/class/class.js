// class abc {
//     constructor(person) {
//         this.person = person;
//         this.age = 25;
//     }

//     sayHi() {
//         // use strict mode is on
//         console.log('Hello');
//         console.log(this.person)
//         // console.log(this);
//     }
// }

// // member func. are made on heap at common location for different obj.

// let obj = new abc('Alex');
// let obj2 = new abc('Stuart');
// // console.log(obj);
// // console.log(obj2);

// // let fn = obj.sayHi;
// // fn();

// let btn = document.querySelector('button');
// btn.addEventListener('click', obj.sayHi);

///////////////////////////// Bind

class abc {
    constructor(person) {
        this.person = person;
        this.age = 25;
        this.sayHi = this.sayHi.bind(this);
    }

    sayHi() {
        console.log('Hello');
        console.log(this.person);
        // console.log(this);
    }
}

// member func. are made on heap at common location for different obj.

let obj = new abc('Alex');
let obj2 = new abc('Stuart');
// console.log(obj);
// console.log(obj2);

// let fn = obj.sayHi;
// fn();   

// problem
let btn = document.querySelector('button');
// btn.addEventListener('click', obj.sayHi);
btn.addEventListener('click', obj.sayHi);