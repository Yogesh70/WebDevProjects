// Automation Code
// Fn() of puppeteer returns the <pending> promises
const puppeteer = require('puppeteer');

let tab;

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
        // On change of webPage, Data comes up very fast but DOM is not loaded till yet. So, Time is reqd for loading of DOM. To overCome this problem we use waitPromise so that DOM is loaded completely.  
        let waitPromise = tab.waitForSelector('a[data-attr1="one-month-preparation-kit"]', { visible: true })
        return waitPromise;
    })
    .then(function () {
        let PrepkitBtnPromise = tab.click('a[data-attr1="one-month-preparation-kit"]');
        return PrepkitBtnPromise;
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
        console.log(allLinks);
    })
    .catch(function (error) {
        console.log(error);
    })
