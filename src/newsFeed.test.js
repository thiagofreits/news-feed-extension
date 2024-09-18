const puppeteer = require('puppeteer');

describe('Feed de Noticias', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('file://'+ __dirname +'/../public/index.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display news articles', async () => {
    await page.waitForSelector('#news-feed');
    const results = await page.$$('#news-feed div');
    expect(results.length).toBeGreaterThan(0);
  });
});
