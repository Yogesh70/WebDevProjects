let person = {
    name: 'Dr. Strange',
    country: 'NYC',
    job: 'Avenger'
}

// old way
// console.log(person.name);
// console.log(person["country"]);
// console.log(person.job);


// Destructuring
// let { name, country, job } = person;
// console.log(name);
// console.log(country);
// console.log(job);


// undefined case
// let { name, country, car, job } = person;
// console.log(car)

// Default value
// let { name, country, job, car = "Audi" } = person;
// console.log(car);


// Alias name
let { name: a, country: b, job: c } = person;
console.log(a);
console.log(b);
console.log(c);
