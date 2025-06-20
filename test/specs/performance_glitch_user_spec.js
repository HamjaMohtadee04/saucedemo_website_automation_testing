const standard_user_login = require('../pages/locked_out_user_login');
const standard_user = require('../pages/standard_user');
const performance_glitch_user = require('../pages/performance_glitch_user');
const username = "performance_glitch_user"
const password = "secret_sauce"
const firstName = "hamja"
const lastName = "mohtadee"
const postalCode = 2210
const productName = "Test.allTheThings() T-Shirt (Red)"
const expectedPrice = 15.99

describe("performance_glitch_user login test",()=>{

    it("should login performance_glitch_user",async()=>{    
        await standard_user_login.LogIn(username,password)
     
    })
    
it("should click on hamburger menu and reset app state",async()=>{
        await standard_user.clickOnBurgerMenu()
        await standard_user.clickResetAppState()
     })
it("should filter products by Z to A",async()=>{
       await performance_glitch_user.FilterProducts()
       await performance_glitch_user.FilterProductsByZtoA()
     })
it("it should add first product to the cart and navigate to checkout page.Then click on checkout button to navigate final checkout page",async()=>{
       await performance_glitch_user.AddProduct()
        await performance_glitch_user.CartIcon()
        await performance_glitch_user.CheckOutButton()
     })
      it("should click on checkout button then fill up the user confirmation form and navigate to final purchase",async()=>{
           await standard_user.FillCheckoutForm(firstName,lastName,postalCode)
           await standard_user.ClickOnCheckoutContinueButton()
            await browser.pause(5000)
          })
      it("it should valid the product name,product price and total price with tax on checkout page",async()=>{

          const expectedProductName = await performance_glitch_user.getProductName();
         expect(productName).toEqual(expectedProductName);

         //price
   const priceText = await performance_glitch_user.getProductPrice(); 
    const taxText = await performance_glitch_user.getTaxText();        
        const totalText = await performance_glitch_user.getTotalWithTaxText(); 

        const actualPrice = parseFloat(priceText.replace("$", ""));
        const tax = parseFloat(taxText.replace("Tax: $", ""));
        const total = parseFloat(totalText.replace("Total: $", ""));
 
        //total
        expect(actualPrice).toEqual(expectedPrice);
        expect(total).toEqual(parseFloat((actualPrice + tax).toFixed(2)));
          })

it("should click on finish button and verify successful order message",async()=>{
       await performance_glitch_user.clickFinishButton()
        await performance_glitch_user.getSuccessfulOrderMessage()
      await browser.pause(2000)
     })
it("it will reset the app state and logout the performance_glitch_user",async()=>{
       await performance_glitch_user.clickOnBurgerMenu()
        await performance_glitch_user.clickResetAppState()
        await performance_glitch_user.Logout()
      await browser.pause(2000)
     })
 
})

