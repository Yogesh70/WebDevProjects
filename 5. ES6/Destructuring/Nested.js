const user = {
    id: 339,
    name: "Yogesh",
    age: '21',
    education: {
        degree: "Masters",
        school: {
            name: "MDS",
            location: "Rohtak"
        }
    }
}

// let { age } = user;
// console.log(age);

// degree
// let { education: { degree } } = user;
// console.log(degree);

// school name
let { education: { school: { name } } } = user;
console.log(name);