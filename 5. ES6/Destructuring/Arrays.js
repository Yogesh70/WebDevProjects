let introduction = ['Hello', 'I', 'am', 'Yogesh'];
// let greeting = introduction[0];
// let pronoun = introduction[1];
// traditional


// Destructuring
// let [greeting, pronoun, variable, name] = introduction;
// console.log(greeting);
// console.log(pronoun);
// console.log(variable);
// console.log(name);

// Skipping Values
// let [greeting, pronoun, , name] = introduction;
// console.log(greeting);
// console.log(pronoun);
// console.log(name);


// Giving default value
let [greeting = "hi", name = "Yogesh"] = ['hello']; // greeting would take the value of assigned & value of name remains default value
console.log(greeting);
console.log(name);


// Swapping
let a = 5;
let b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);
