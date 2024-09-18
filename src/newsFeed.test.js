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
    await page.waitForSelector('#news-feed', { timeout: 15000 });
    const newsFeedContent = await page.$eval('#news-feed', el => el.innerHTML);
    console.log('Conteúdo do #news-feed:', newsFeedContent); // Verifique o conteúdo do #news-feed
    expect((await page.$$('#news-feed div')).length).toBeGreaterThan(0);
  });
});
