const standard_user_login = require('../pages/locked_out_user_login');
const standard_user = require('../pages/standard_user');
const username = "standard_user"
const password = "secret_sauce"
const firstName = "hamja"
const lastName = "mohtadee"
const postalCode = 2210
const verifiedOrderText = "Thank you for your order!"
describe("standard_user login test",()=>{

    it("should login standard_user",async()=>{
       
        await standard_user_login.LogIn(username,password)
        await browser.pause(30000)
    })

     it("should click on hamburger menu and reset app state",async()=>{
        await standard_user.clickOnBurgerMenu()
        await standard_user.clickResetSideBar()
     })
     it("should add products to the cart and navigate to the cart",async()=>{
        await standard_user.AddingProductsToCart()
        await standard_user.clickOnCartIcon()
           await browser.pause(3000)
     })
     it("should click on checkout button then fill up the user confirmation form and navigate to final purchase",async()=>{
      await standard_user.clickOnCheckoutButton()
      await standard_user.FillCheckoutForm(firstName,lastName,postalCode)
      await standard_user.ClickOnCheckoutContinueButton()
       await browser.pause(5000)
     })

     //validation

    it("should verify product names and total price on final checkout page", async () => {
    const expectedNames = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt"
    ];
    const expectedPrices = [29.99, 9.99, 15.99];

    // Validate product names
    const actualNames = await standard_user.getProductNamesText();
    let nameMatchCount = 0;

    for (let i = 0; i < expectedNames.length; i++) {
        if (actualNames.includes(expectedNames[i])) {
            nameMatchCount++;
        } else {
            console.log(`Missing product: ${expectedNames[i]}`);
        }
    }

    expect(nameMatchCount).toEqual(expectedNames.length);

    // Validate prices
    const priceTexts = await standard_user.getProductPricesText();
    const actualPrices = [];
    for (let i = 0; i < priceTexts.length; i++) {
        const price = parseFloat(priceTexts[i].replace('$', ''));
        actualPrices.push(price);
        expect(price).toEqual(expectedPrices[i]);
    }

    // Validate item total
    let sum = 0;
    for (let i = 0; i < actualPrices.length; i++) {
        sum += actualPrices[i];
    }

    const itemTotalText = await standard_user.getItemTotalText(); // "Item total: $55.97"
    const taxText = await standard_user.getTaxText();             // "Tax: $4.48"
    const totalText = await standard_user.getTotalWithTaxText();  // "Total: $60.45"

    const itemTotal = parseFloat(itemTotalText.replace("Item total: $", ""));
    const tax = parseFloat(taxText.replace("Tax: $", ""));
    const totalWithTax = parseFloat(totalText.replace("Total: $", ""));

    expect(itemTotal).toEqual(sum);
    expect(totalWithTax).toEqual(itemTotal + tax);
    await browser.pause(3000)
});
 
it("it should click the reset button and verify the successful order",async()=>{
    await standard_user.getFinishButton()

 const expectedOrderText = await standard_user.getSuccessfulOrderMessage();
expect(expectedOrderText).toEqual(verifiedOrderText);

await browser.pause(3000)
})



})



