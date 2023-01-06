// const webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();driver.get('http://www.google.com').then(function(){
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
//     // driver.getTitle().then(function(title) {
//     //   console.log(title)
//     //   if(title === 'Google') {
//     //      console.log('Test passed');
//     //   } else {
//     //      console.log('Test failed');
//     //   }
//     //  driver.quit();
//     });
//   });
// });

// var assert = require('assert');
// var test = require('selenium-webdriver/testing');
// var webdriver = require('selenium-webdriver');

// describe('Verify setup with Google Search', function() {
//   it('test case should work', async function() {
//     var driver = new webdriver.Builder().
//     withCapabilities(webdriver.Capabilities.firefox()).
//     build();
//     await driver.get('http://www.google.com');
//     var searchBox = driver.findElement(webdriver.By.name('q'));
//     await earchBox.sendKeys('selenium node automation');
//     await searchBox.getAttribute('value').then(function(value) {
//       assert.equal(value, 'selenium node automation');
//     });
//     driver.quit();
//   });
// });

// const { Builder, By, Key, until } = require("selenium-webdriver");
// (async function example() {
//   let driver = await new Builder().forBrowser("firefox").build();
//   try {
//     await driver.get("http://www.google.com/");
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
//     await driver.wait(until.titleIs("Selenium - Google Search"), 1000);
//   } finally {
//     // await driver.quit();
//     console.log("All Done");
//   }
// })();


// var assert = require('assert'),
// test = require('selenium-webdriver/testing'),
// webdriver = require('selenium-webdriver');
 
// describe('Verify setup with Google Search', function() {
//   it('test case should work', function() {
//     var driver = new webdriver.Builder().
//     withCapabilities(webdriver.Capabilities.firefox()).
//     build();
// driver.get('http://www.google.com');
//     var searchBox = driver.findElement(webdriver.By.name('q'));
//     searchBox.sendKeys('selenium node automation');
//     searchBox.getAttribute('value').then(function(value) {
//       assert.equal(value, 'selenium node automation');
//     });
//     driver.quit();
//   });
// });

const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By, Key} = require('selenium-webdriver');
const assert = require('assert');

describe('webdriver', () => {
    // this.timeout(10000);
    let driver;
    before(async () => {
      driver = new webdriver.Builder().forBrowser('firefox')
      .build();
     
      await driver.get(`https://google.com`);
    }, 30000);
  
    after(async () => {
        console.log("\nTests Completed!!\n");
        await setTimeout(function() {
            driver.quit();
          }, 2000);
    }, 40000);
  
    it('test google search', async () => {

        await driver.findElement(webdriver.By.name('q')).sendKeys('webdriver', Key.RETURN)
        // await driver.findElement(webdriver.By.name('q')).sendKeys(Key.RETURN)
        
        await driver.wait(until.titleIs("webdriver - Google Search"), 10000);
        const title = await driver.getTitle()
        console.log(title)
        assert.equal(title, "webdriver - Google Search")
    }, 35000);
  });