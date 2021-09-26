// Find details of single match
const cheerio = require('cheerio');
const request = require('request');
let fs = require('fs');

// const link = 'https://www.espncricinfo.com/series/ipl-2021-1249214/sunrisers-hyderabad-vs-punjab-kings-37th-match-1254107/full-scorecard';

function getMatch(link) {
    request(link, cb);
}

function cb(error, response, html) {
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
    let ch = cheerio.load(html);
    let bothInningsCard = ch('.card.content-block.match-scorecard-table .Collapsible');
    // fs.writeFileSync('./both.html', bothInningsCard + "");

    for (let i = 0; i < bothInningsCard.length; i++) {
        let teamName = ch(bothInningsCard[i]).find('h5').text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0].trim();
        // console.log(teamName);

        let allTrs = ch(bothInningsCard[i]).find('.table.batsman tr');

        for (let j = 0; j < allTrs.length - 4; j++) {
            let allTds = ch(allTrs[j]).find('td');

            if (allTds.length > 1) {
                let batsmanName = ch(allTds[0]).find('a').text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate = ch(allTds[7]).text().trim();

                console.log(`Batsman => ${batsmanName} Runs => ${runs} Balls => ${balls} Fours => ${fours} Sixes => ${sixes} SR => ${strikeRate}`);
            }
        }
        console.log('------------------------------');
    }
}

module.exports = {
    getMatch
}