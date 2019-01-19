const puppeteer = require('puppeteer');
const path = require('path');

const {
    describe, test, beforeAll, afterAll
} = global;

describe('App', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('links', async () => {
        await page.goto('http://localhost:7000');
        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        // const toTest = hrefs.slice(0, hrefs.length - 1);
        await Promise.all(
            [ // check index 0, why fails
                await Promise.all([
                    page.goto(hrefs[1]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[1].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[2]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[2].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[3]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[3].split('/').pop()}.png`) }),
                ])
            ]
        );
    });
});
