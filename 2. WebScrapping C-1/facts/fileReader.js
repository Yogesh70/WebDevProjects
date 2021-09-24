const fs = require('fs');
const cheerio = require('cheerio');

let f1Data = fs.readFileSync('./f1.txt', 'utf-8');

// console.log(f1Data);

let htmlData = fs.readFileSync('./index.html');
// console.log(htmlData + '');

let ch = cheerio.load(htmlData);

let h1Data = ch('h1').text();
// console.log(h1Data);

let pData = ch('p');
// [ <p> </p>, <p> </p> ]
console.log(pData.text());

let firstP = ch(pData[0]).text();
// console.log(firstP);


// let pText = ch('.pi.outer').text();
// console.log(pText);

// nested p tag
let pText = ch('ul .pi').text();
console.log(pText);

let hData = ch('#unique').text();
console.log(hData);