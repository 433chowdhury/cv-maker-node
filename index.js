const puppeteer = require('puppeteer');

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // await page.waitForResponse('http://localhost:3000')
    // Navigate the page to a URL
    await page.goto('http://localhost:3000', { waitUntil: 'load' });

    // Set screen size
    // await page.setViewport({ width: "11.7in", height: "8.6in" });
    await page.emulateMediaType('screen');

    // this is needed to show fonts properly
    await page.waitForSelector("body");

    await page.pdf({
        path: `${__dirname}/files/cv.pdf`,
        height: "10in", width: "7.3in",
        pageRanges: "1",
        printBackground: true
    })

    await browser.close();
})();

