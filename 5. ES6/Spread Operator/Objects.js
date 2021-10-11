const { stat } = require("fs");

let state = {
    name: 'John',
    address: {
        city: "London",
        country: {
            countryName: "United Kingdom",
            countryCode: "UK"
        }
    }
}

// arrays, objects & functions -> Heap Memory Area
// Ref Copy -> Change in state as well as copy
// let copy = state;
// copy.name = "Yogesh";
// console.log(state);
// console.log(copy);

// using spread operator
let copy = { ...state }; // shallow copy
// copy.name = "Yogesh";
// console.log(state);
// console.log(copy);

// copy.address.city = "Delhi"; // change in both copy & state
// console.log(state);
// console.log(copy);

// shallow copy for an object i.e. spread, the uppermost level is created at a new memory space 
// the properties of the uppermost level remains the same
// the lower levels are not affected by this... they keep on pointing to their original reference

let doubleCopy = {
    ...state,
    address: {
        ...state.address
    }
}
// doubleCopy.address.city = "Delhi";
// console.log(state);
// console.log(doubleCopy);

// doubleCopy.address.country.countryName = "India";
// console.log(state);
// console.log(doubleCopy);


// let deepCopy = {
//     ...state,
//     address: {
//         ...state.address,
//         country: {
//             ...state.address.country
//         }
//     }
// }
// deepCopy.address.country.countryName = "India";
// console.log(state);
// console.log(deepCopy);

// another way -- if there are multiple nested objects
let dCopy = JSON.parse(JSON.stringify(state));
// console.log(dCopy);
dCopy.address.country.countryName = "India";
console.log(state);
console.log(dCopy);