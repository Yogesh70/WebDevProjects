// Automation Code
// Fn() of puppeteer returns the <pending> promises
const { futimesSync } = require('fs');
const puppeteer = require('puppeteer');

let tab;
let idx;
let gCode;

// build a browser / open a browser
let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

browserOpenPromise.then(function (browser) {
    let pagesPromise = browser.pages();
    return pagesPromise;
})
    .then(function (pages) {
        // pages in array
        let page = pages[0];
        tab = page;
        let pageOpenedPromise = page.goto('https://www.hackerrank.com/auth/login');
        return pageOpenedPromise;
    })
    .then(function () {
        let idTypedPromise = tab.type('#input-1', 'myvolepy@tempmailin.com');
        return idTypedPromise;
    })
    .then(function () {
        let pwTypedPromise = tab.type('#input-2', 'Testing@123');
        return pwTypedPromise;
    })
    .then(function () {
        let loginBtnClicked = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
        return loginBtnClicked;
    })
    .then(function () {
        let waitAndClickPromise = waitAndClick('a[data-attr1="one-month-preparation-kit"]');
        return waitAndClickPromise;
    })
    .then(function () {
        let waitPromise = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-line-primary.interview-ch-li-cta.ui-btn-link.ui-btn-styled');
        return waitPromise;
    })
    .then(function () {            // document.querySelectorAll() -> tab.$$() in Puppeteer
        let allQuestionsPromise = tab.$$('.ui-btn.ui-btn-normal.ui-btn-line-primary.interview-ch-li-cta.ui-btn-link.ui-btn-styled');
        return allQuestionsPromise;
    })
    .then(function (allQuestions) {
        // [ <a> </a> , <a> </a> , <a> </a> ]
        let allLinksPromise = [];
        for (let i = 0; i < allQuestions.length; i++) {
            let linkPendingPromise = tab.evaluate(function (elem) { return elem.getAttribute('href'); }, allQuestions[i]);
            allLinksPromise.push(linkPendingPromise);
        }

        let allQuestionsPromise = Promise.all(allLinksPromise);
        return allQuestionsPromise;
    })
    .then(function (allLinks) {
        let completeLinks = [];
        for (let i = 0; i < allLinks.length; i++) {
            completeLink = 'http://www.hackerrank.com' + allLinks[i];
            completeLinks.push(completeLink);
        }
        // console.log(completeLinks);
        // let questionSolvedPromise = solveQuestion(completeLinks[0]); // serially => loops
        // return questionSolvedPromise;

        let oneQuesSolvedPromise = solveQuestion(completeLinks[0]); // serially loop
        for (let i = 1; i < completeLinks.length; i++) {
            oneQuesSolvedPromise = oneQuesSolvedPromise.then(function () {
                let nextQuesSolvedPromise = solveQuestion(completeLinks[i]);
                return nextQuesSolvedPromise;
            })
        }
    })
    .then(function () {
        console.log("All Q's solved");
    })
    .catch(function (error) {
        console.log(error);
    })

function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        // On change of webPage, Data comes up very fast but DOM is not loaded till yet. So, Time is reqd for loading of DOM. To overCome this problem we use waitPromise so that DOM is loaded completely.  
        let waitPromise = tab.waitForSelector(selector, { visible: true })
        waitPromise.then(function () {
            let clickedPromise = tab.click(selector);
            return clickedPromise;
        })
            .then(function () {
                resolve();
            })
            .catch(function (error) {
                reject(error);
            })
    })
}

function getCode() {
    return new Promise(function (resolve, reject) {
        let waitPromise = tab.waitForSelector('.hackdown-content h3');
        waitPromise.then(function () {
            let allCodeNamesPromise = tab.$$('.hackdown-content h3');
            return allCodeNamesPromise;
        })
            .then(function (allCodesNames) {
                // [ <h3>C++</h3>, <h3>Python</h3>, <h3>Ruby</h3]
                let allCodesNamesPromise = [];
                // [Promise<pending>, Promise<pending>, Promise<pending>]
                for (let i = 0; i < allCodesNames.length; i++) {
                    let namePromise = tab.evaluate(function (elem) { return elem.textContent; }, allCodesNames[i]);
                    allCodesNamesPromise.push(namePromise);
                }
                let promiseAllCodesNames = Promise.all(allCodesNamesPromise);
                return promiseAllCodesNames;
            })
            .then(function (allCodesNames) {
                for (let i = 0; i < allCodesNames.length; i++) {
                    if (allCodesNames[i] == 'C++') {
                        idx = i;
                        break;
                    }
                }

                let allCodesDivPromise = tab.$$('.hackdown-content .highlight');
                return allCodesDivPromise;
            })
            .then(function (allCodesDiv) {
                // [<div> </div>, <div> </div>, <div> </div>]
                let codeDiv = allCodesDiv[idx];
                let codePromise = tab.evaluate(function (elem) { return elem.textContent }, codeDiv);
                return codePromise;
            })
            .then(function (code) {
                gCode = code;
                resolve();
            })
            .catch(function (error) {
                reject(error);
            })
    })
}

function handleLockBtn() {
    return new Promise(function (resolve, reject) {
        let waitAndClickPromise = waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
        waitAndClickPromise.then(function () {
            console.log('Lock Btn Clicked!');
            resolve();
        })
            .catch(function (error) {
                // when waitAndClick() fails -> when selector is not found !!
                console.log('Lock Btn not Found..');
                resolve();
            })
    })
}

function solveQuestion(qLink) {
    return new Promise(function (resolve, reject) {
        let questionGotoPromise = tab.goto(qLink);
        questionGotoPromise.then(function () {
            console.log('opened question!!');
        })
            .then(function () {
                let waitPromise = waitAndClick('a [data-attr2="Editorial"]');
                return waitPromise;
            })
            .then(function () {
                let handleLockBtnPromise = handleLockBtn();
                return handleLockBtnPromise;
            })
            .then(function () {
                let codePromise = getCode();
                return codePromise;
            })
            .then(function () {
                // console.log('got code !');
                let clickedPromise = tab.click('a [data-attr2="Problem"]');
                return clickedPromise;
            })
            .then(function () {
                let codePastedPromise = pasteCode();
                return codePastedPromise;
            })
            .then(function () {
                // console.log('Code Pasted');
                let submitBtnClickedPromise = tab.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
                return submitBtnClickedPromise;
            })
            .then(function () {
                resolve();
            })
            .catch(function (error) {
                reject(error);
            })
    })
}

function pasteCode() {
    return new Promise(function (resolve, reject) {
        let waitAndClickPromise = waitAndClick('.checkbox-wrap');
        waitAndClickPromise.then(function () {
            let codeTypedPromise = tab.type('.custominput', gCode);
            return codeTypedPromise;
        })
            .then(function () {
                // console.log('Code is typed !');
                let controlKeyHoldPromise = tab.keyboard.down('Control');
                return controlKeyHoldPromise;
            })
            .then(function () {
                let aKeyHoldPromise = tab.keyboard.down('a');
                return aKeyHoldPromise;
            })
            .then(function () {
                let xKeyHoldPromise = tab.keyboard.down('x');
                return xKeyHoldPromise;
            })
            .then(function () {
                console.log('editor selected');
                let editorSelectedPromise = tab.click('.overflow-guard');
                return editorSelectedPromise;
            })
            .then(function () {
                console.log('ctrl key pressed');
                let controlKeyHoldPromise = tab.keyboard.down('Control');
                return controlKeyHoldPromise;
            })
            .then(function () {
                let aKeyHoldPromise = tab.keyboard.down('a');
                return aKeyHoldPromise;
            })
            .then(function () {
                let vKeyHoldPromise = tab.keyboard.down('v');
                return vKeyHoldPromise;
            })
            .then(function () {
                resolve();
            })

            .catch(function (error) {
                reject(error);
            })
    })
}