const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://y-wheat-eight.vercel.app/');
  // await page.goto('https://google.com');

  // await page.screenshot({ path: 'example.png', fullPage: true });
  // await page.pdf({ path: 'example.pdf', format: 'A4' });

  // const html = await page.content();
  // console.log(html);

  // const title = await page.evaluate(() => document.title);
  // console.log(title);

  // const text = await page.evaluate(() => document.body.innerText);
  // console.log(text);

  // const classNames = await page.evaluate(
  //   () => Array.from(document.querySelectorAll('div')),
  //   (e) => e.className
  // );
  // console.log(classNames);

  const divs = await page.$$eval('div', (elements) =>
    elements.map((e) => ({
      className: e.className,
    }))
  );
  fs.writeFile('divs.json', JSON.stringify(divs), (err) => {
    if (err) throw err;
    console.log('File Saved');
  });

  await browser.close();
}

run();
