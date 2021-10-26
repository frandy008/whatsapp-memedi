const puppeteer = require("puppeteer");

let page = null;
let browser = null;

// browser = puppeteer.launch({ 
//   headless: false,
//   args: [
//     '--no-sandbox',
//     '--disable-setuid-sandbox',
//     '--disable-dev-shm-usage',
//     '--disable-accelerated-2d-canvas',
//     '--no-first-run',
//     '--no-zygote',
//     '--single-process', // <- this one doesn't works in Windows
//     '--disable-gpu'
//   ], })
//   .then( async (browser) => {
//     page = await browser.newPage();

//     page.goto("https://www.google.co.id/maps/place/luwuk", {
//       waitUntil: "networkidle2",
//     });

//     await page.type("*[id='searchboxinput']", 'luwuk', {delay: 500})

//   })
//   .catch((error) => {
//     console.log(error)
//   })

(async() =>{
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ], });
  
    const page = await browser.newPage();
    await page.goto('https://www.google.co.id/maps/search/');
    
    await page.type("#searchboxinput", "toko komputer luwuk");
    await page.click("#searchbox-searchbutton").then(()=>{
      
    });

    //await browser.close();
})();