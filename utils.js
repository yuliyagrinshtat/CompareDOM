
//file utils.js describes function

require('chromedriver');

require('geckodriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const equals = require('selenium-webdriver').equals;
const {Builder, By, Key, until} = require('selenium-webdriver');

//variable browsers
const capabilities = [
    {browserName: 'chrome'},
    {browserName: 'firefox'},
];

//function returns value elements from browsers (chrome, firefox)
module.exports = function getElementsDataForBrowsers(elements) {

    const results = capabilities.map(async function (browser) {

        let driver = await new Builder().forBrowser(browser.browserName).build(); // build webdriver for two browsers.
        try {
            await driver.get('https://www.wired.com');

            for (let elementId in elements) {
                const elementData = elements[elementId];
                const selector = elementData.selector; // locator of element

                //CSS Style variable , that I want compare
                let elementCssHeight = null; //CSS Heigth of a element
                let elementFont = null; //CSS Font of a element
                let element = null;
                let elementText = null; //CSS Text of a element
                let elementColor = null; //CSS Color of a element

                try {
                    element = await driver.findElement(By.css(selector)); // find element via locator By.css

                    elementText = await element.getText(); // function return text of a element
                    elementColor = await element.getCssValue('color'); // function return color a element
                    elementCssHeight = await element.getCssValue('height'); // function return Height  a element
                    elementFont = await element.getCssValue('font-family'); // function returns font a element
                }
                catch (e) {
                    console.log('Failed to retrieve element data for ', elementId, "Browser Name:", browser.browserName, e);
                }

                elementData.dataByBrowserName[browser.browserName] = {elementCssHeight, elementFont, elementText, elementColor }; // add to array all elements
            }
        }
        catch (e) {
            console.log('!!! ERROR:', e);
        }

        finally {
            await driver.quit(); // close browser and kill process drivers
        }
    });

    return Promise.all(results) // return result from function
        .then(() => {
        return elements;
});
}

