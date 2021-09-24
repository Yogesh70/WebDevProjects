// HOF functions ->     
// higher order functions ->
// functions which takes functions as an argument/parameter;


// Callback functions ->
// function which are passed as a function in another functions;

function getFirstName(name) {
    // return firstName
    // Steve Rogers
    name = name.split(" ");
    // [Steve, Rogers]
    return name[0];
}

function getLastName(name) {
    // return lastName
    name = name.split(" ");
    return name[1];
}

function fun(name, sayHi) {
    let a = sayHi(name);
    console.log(a + " says Hi!");
}

fun("Steve Rogers", getFirstName);
fun("Steve Rogers", getLastName);
