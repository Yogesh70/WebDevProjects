const puppeteer = require('puppeteer');
import { challenges } from './challenges.js';

(async function () {
    try {
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized']
        });

        let pages = await browser.pages();
        let page = await pages[0];
        await page.goto('https://www.hackerrank.com/auth/login');

        await page.type('#input-1', 'myvolepy@tempmailin.com')
        await page.type('#input-2', 'Testing@123');
        await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle0' }), page.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled')])

        await page.waitForSelector('.dropdown-handle.nav_link.toggle-wrap', { visible: true });
        await page.click('.dropdown-handle.nav_link.toggle-wrap');
        await page.click('a[data-analytics="NavBarProfileDropDownAdministration"]');

        await page.waitForSelector('a[href="/administration/challenges"]', { visible: true });
        await page.click('a[href="/administration/challenges"]');

        await page.click('.btn.btn-green.backbone.pull-right');
        // pending promise to create one challenge
        await createChallenge(challenges[0]);

    }
    catch (error) {
        console.log(error);
    }
})();

function createChallenge(challenge) {
    return new Promise(await function (resolve, reject) {
        
    })
}
