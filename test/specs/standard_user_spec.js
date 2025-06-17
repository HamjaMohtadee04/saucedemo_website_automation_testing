const standard_user_login = require('../pages/locked_out_user_login');
const standard_user = require('../pages/standard_user');
const username = "standard_user"
const password = "secret_sauce"
const firstName = "hamja"
const lastName = "mohtadee"
const postalCode = 2210
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
})



