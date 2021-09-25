// npm i request -> npm package used to make request on a webPage and get html
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

let link = 'https://www.espncricinfo.com/series/ipl-2021-1249214';

request(link, cb);

function cb(error, response, html) {
    if (error == null && response.statusCode == 200) {
        parseData(html);
    }
    else if (response.statusCode == 404) {
        console.log('page not found');
    }
    else {
        console.log(error);
    }
}

function parseData(html) {
    // fs.writeFileSync('./homepage.html', html);
    let ch = cheerio.load(html);
    let resultTag = ch('.widget-items.cta-link a').attr('href');
    let completeLink = 'https://www.espncricinfo.com' + resultTag;
    console.log(completeLink);
}