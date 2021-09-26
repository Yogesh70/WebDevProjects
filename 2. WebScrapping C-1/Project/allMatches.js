const request = require('request');
const Cheerio = require('cheerio');

function getAllMatches(link) {
    request(link, cb);
}

function cb(error, response, html) {
    if (error == null && response.statusCode == 200) {
        resultLink(html);
    }
    else if (response.statusCode == 404) {
        console.log('Page not found');
    }
    else {
        console.log(error);
    }
}

function resultLink(html) {
    // console.log(html);
    const ch = Cheerio.load(html);
    let resultContainer = ch('.widget-tabs.team-scores-tabs.card a');
    let resultBtn = ch(resultContainer[1]).attr('href');
    let completeResultLink = 'https://www.espncricinfo.com' + resultBtn;
    console.log(completeResultLink);

    request(completeResultLink, cb2);
}

function cb2(error, response, html) {
    if (error == null && response.statusCode == 200) {
        parseData(html);
    }
    else if (response.statusCode == 404) {
        console.log('Page not found');
    }
    else {
        console.log(error);
    }
}

function parseData(html) {
    let ch = Cheerio.load(html);
    let resultContainer = ch('.widget-tabs.team-scores-tabs.card a');
    let resultBtn = ch(resultContainer[1]).attr('href');
    let completeResultLink = 'https://www.espncricinfo.com' + resultBtn;
    // console.log(completeResultLink);

    // getAllMatches(completeResultLink); // get link of all matches
    let allATags = ch('a[data-hover="Scorecard"]');
    // [ <a></a>, <a></a>, <a></a>, ... ]

    for (let i = 0; i < allATags.length; i++) {
        let link = ch(allATags[i]).attr('href');
        let completeLink = 'https://www.espncricinfo.com' + link;
        console.log(completeLink);
    }
}

module.exports = {
    getAllMatches // exported as an empty object
    // fun: getAllMatches -> exported as a key { fun }
}