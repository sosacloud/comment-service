const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3001/';

let page;
let browser;
const width = 1280;
const height = 720;

let x = async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
};
let y = () => {
    browser.close();
};
let z = async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
    var selector = 'input.comment';
    await page.click(selector);
    await page.type(selector, 'Hello');
    await page.keyboard.press('Enter');

}
let master = async () => {
    await x();
    await z();
    
    // y();

};
master();