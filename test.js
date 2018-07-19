//file test.js describes all test cases


/*require( 'nightmare');
require('cucumber-html-reporter');*/

//const report=require('./report');
const getElementsDataForBrowsers = require('./utils');


// / import file utils


// elements to compare in two browsers
const elementsToCompare = {
    btnCulture: {
        selector: '#app-root > div > header > nav > ul > li.nav--culture > a',
        dataByBrowserName: {}
    },
    btnBusiness: {
        selector: '#app-root > div > header > nav > ul > li.nav--business > a',
        dataByBrowserName: {}
    },
    btnGear: {
        selector: '#app-root > div > header > nav > ul > li.nav--gear > a',
        dataByBrowserName: {}
    },
    btnSearch: {
        selector: '#logo-bar > button.component-toggle.toggle--search',
        dataByBrowserName: {}
    },
    Logo: {
        selector: '.icon--logo',
        dataByBrowserName: {}
    }

};
//Test suite Compare text elements in two browsers
describe('Compare elements in DOM, compare text of buttons', () => {
     //method open two browsers before test cases for testing
    beforeAll(() => {
    return getElementsDataForBrowsers(elementsToCompare)
        .then(elements => {
    })
}, 120000);

    // test case check button Culture
test("Text of button Culture to be the same in all browsers", () => {
    expect(elementsToCompare.btnCulture.dataByBrowserName.chrome.elementText).toEqual(elementsToCompare.btnCulture.dataByBrowserName.firefox.elementText)

});

    //test case check button Business
test("Text of button Business to be the same in all browsers", () => {
expect(elementsToCompare.btnBusiness.dataByBrowserName.chrome.elementText).toEqual(elementsToCompare.btnBusiness.dataByBrowserName.firefox.elementText)



});
//test case check button Gear
    test("Text of button Gear to be the same in all browsers", () => {
        expect(elementsToCompare.btnGear.dataByBrowserName.chrome.elementText).toEqual(elementsToCompare.btnGear.dataByBrowserName.firefox.elementText)
    });
})
//Test suite Compare Color elements in two browsers
describe('Compare elements in DOM, compare color of the buttons',()=>{
    beforeAll(() => {
        return getElementsDataForBrowsers(elementsToCompare)
            .then(elements => {
            })
    }, 120000);
    // test case check button Culture
    test("Color of button Culture to be the same in all browsers", () => {
       expect(elementsToCompare.btnCulture.dataByBrowserName.chrome.elementColor).toEqual(elementsToCompare.btnCulture.dataByBrowserName.firefox.elementColor)



    });
    //test case check button Business
    test("Color of button Business to be the same in all browsers", () => {
        expect(elementsToCompare.btnBusiness.dataByBrowserName.chrome.elementColor).toEqual(elementsToCompare.btnBusiness.dataByBrowserName.firefox.elementColor)
    });

    //test case check button Gear
    test("Color of button Gear to be the same in all browsers", () => {
     const equal=  expect(elementsToCompare.btnGear.dataByBrowserName.chrome.elementColor).toEqual(elementsToCompare.btnGear.dataByBrowserName.firefox.elementColor);
     if (equal){
         console.log("ddddddd");
     }

    });
    //test case check button Search
    test("Color of button Search to be the same in all browsers", () => {
        expect(elementsToCompare.btnSearch.dataByBrowserName.chrome.elementColor).toEqual(elementsToCompare.btnSearch.dataByBrowserName.firefox.elementColor)
    });
    //test case check label Logo
    test("Color of label  Logo to be the same in all browsers", () => {
        expect(elementsToCompare.Logo.dataByBrowserName.chrome.elementColor).toEqual(elementsToCompare.Logo.dataByBrowserName.firefox.elementColor)
    });

})
//Test suite Compare Height elements in two browsers
describe('Compare elements in DOM, compare Height of the buttons',()=>{
    beforeAll(() => {
        return getElementsDataForBrowsers(elementsToCompare)
            .then(elements => {
            })
    }, 120000);


    // test case check button Culture
    test("Height of button Culture to be the same in all browsers", () => {
        expect(elementsToCompare.btnCulture.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.btnCulture.dataByBrowserName.firefox.elementCssHeight)
    });
    // test case check button Business
    test("Height of button Business to be the same in all browsers", () => {
        expect(elementsToCompare.btnBusiness.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.btnBusiness.dataByBrowserName.firefox.elementCssHeight)
    });
    // test case check button Gear
    test("Height of button Gear to be the same in all browsers", () => {
        expect(elementsToCompare.btnGear.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.btnGear.dataByBrowserName.firefox.elementCssHeight)
    });
    // test case check button Search
    test("Height of button Search to be the same in all browsers", () => {
        expect(elementsToCompare.btnSearch.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.btnSearch.dataByBrowserName.firefox.elementCssHeight)
    });

    // test case check label Logo
    test("Height of label Logo to be the same in all browsers", () => {
        expect(elementsToCompare.Logo.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.Logo.dataByBrowserName.firefox.elementCssHeight)
    });

})
//Test suite Compare Font elements in two browsers
describe('Compare elements in DOM, compare Font of the buttons',()=>{
    beforeAll(() => {
        return getElementsDataForBrowsers(elementsToCompare)
            .then(elements => {
            })
    }, 120000);

    // test case check button Culture
    test("Font of button Culture to be the same in all browsers", () => {
        expect(elementsToCompare.btnCulture.dataByBrowserName.chrome.elementFont).toEqual(elementsToCompare.btnCulture.dataByBrowserName.firefox.elementFont)

    });
    //test case check button Business
    test("Font of button Business to be the same in all browsers", () => {
        expect(elementsToCompare.btnBusiness.dataByBrowserName.chrome.elementFont).toEqual(elementsToCompare.btnBusiness.dataByBrowserName.firefox.elementFont)
    });
    // test case check button Gear
    test("Font of button Gear to be the same in all browsers", () => {
        expect(elementsToCompare.btnGear.dataByBrowserName.chrome.elementFont).toEqual(elementsToCompare.btnGear.dataByBrowserName.firefox.elementFont)
    });
    // test case check label Logo
    test("Font of label Logo to be the same in all browsers", () => {
        expect(elementsToCompare.Logo.dataByBrowserName.chrome.elementCssHeight).toEqual(elementsToCompare.Logo.dataByBrowserName.firefox.elementCssHeight)
    });

})