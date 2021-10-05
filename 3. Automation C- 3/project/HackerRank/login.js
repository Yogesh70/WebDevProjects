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
    .catch(function (error) {
        console.log(error);
    })
