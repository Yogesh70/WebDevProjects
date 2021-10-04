// Find details of single match
const cheerio = require('cheerio');
const request = require('request');
let fs = require('fs');

let leaderBoard = [];
let count = 0;

// const link = 'https://www.espncricinfo.com/series/ipl-2021-1249214/sunrisers-hyderabad-vs-punjab-kings-37th-match-1254107/full-scorecard';

function getMatch(link) {
    console.log("Sending Request ", count);
    request(link, cb);
    count++;
}

function cb(error, response, html) {
    if (error == null && response.statusCode == 200) {
        count--;
        console.log('Received Data ', count);
        parseData(html);

        if (count == 0) {
            console.table(leaderBoard);
        }
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

                // processDetails(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
                createLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes);
            }
        }
        // console.log('------------------------------');
    }
}

function createLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    // if entry exists- update
    for (let i = 0; i < leaderBoard.length; i++) {
        if (leaderBoard[i].Batsman == batsmanName && leaderBoard[i].Team == teamName) {
            leaderBoard[i].Runs += runs;
            leaderBoard[i].Balls += balls;
            leaderBoard[i].Fours += fours;
            leaderBoard[i].Sixes += sixes;
            return;
        }
    }

    // entry doesn't exist
    let entry = {
        Team: teamName,
        Batsman: batsmanName,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderBoard.push(entry);
}

// function processDetails(teamName, batsmanName, runs, balls, fours, sixes, strikeRate) {
//     // check if team folder exists?
//     let isTeamFolder = checkTeamFolder(teamName);

//     if (isTeamFolder) {
//         let isBatsman = checkBatsmanFile(teamName, batsmanName);

//         if (isBatsman) {
//             updateBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
//         }
//         else {
//             createBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
//         }
//     }
//     else {
//         createTeamFolder(teamName);
//         createBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
//     }
// }

// function createTeamFolder(teamName) {
//     // teamName -> MI
//     fs.mkdirSync(teamName);
// }

// function checkTeamFolder(teamName) {
//     // check folder exists or not
//     return fs.existsSync(teamName);
// }

// function createBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate) {
//     let batsmanPath = `${teamName}/${batsmanName}.json`;
//     let batsmanFile = [];
//     let innings = {
//         Runs: runs,
//         Balls: balls,
//         Fours: fours,
//         Sixes: sixes,
//         SR: strikeRate
//     }
//     batsmanFile.push(innings);
//     batsmanFile = JSON.stringify(batsmanFile);
//     fs.writeFileSync(batsmanPath, batsmanFile);
// }

// function checkBatsmanFile(teamName, batsmanName) {
//     // teamName -> MI
//     // batsman -> RohitSharma
//     // BatsmanPath -> `MI/RohitSharma.json` // javascript object notation
//     let batsmanPath = `${teamName}/${batsmanName}.json`;
//     return fs.existsSync(batsmanPath);
// }

// function updateBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate) {
//     let batsmanPath = `${teamName}/${batsmanName}.json`;
//     let batsmanFile = fs.readFileSync(batsmanPath);
//     // stringified -> original form
//     batsmanFile = JSON.parse(batsmanFile);

//     let innings = {
//         Runs: runs,
//         Balls: balls,
//         Fours: fours,
//         Sixes: sixes,
//         SR: strikeRate
//     }
//     batsmanFile.push(innings);
//     batsmanFile = JSON.stringify(batsmanFile);
//     fs.writeFileSync(batsmanPath, batsmanFile);
// }

module.exports = {
    getMatch
}