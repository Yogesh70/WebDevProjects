// Automation Code
// Fn() of puppeteer returns the <pending> promises
const puppeteer = require('puppeteer');


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
        let pageOpenedPromise = page.goto('http://google.com');
        return pageOpenedPromise;
    })
    .then(function () {
        console.log('google opened');
    })

    // (async () => {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('https://example.com');
    //     await page.screenshot({ path: 'example.png' });

    //     await browser.close();
    // })();