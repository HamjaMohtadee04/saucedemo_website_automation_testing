const standard_user_login = require('../pages/locked_out_user_login');
const standard_user = require('../pages/standard_user');
const username = "performance_glitch_user"
const password = "secret_sauce"
const performance_glitch_user = require('../pages/performance_glitch_user');
describe("performance_glitch_user login test",()=>{

    it("should login performance_glitch_user",async()=>{    
        await standard_user_login.LogIn(username,password)
        await browser.pause(30000)
    })
    
it("should click on hamburger menu and reset app state",async()=>{
        await standard_user.clickOnBurgerMenu()
        await standard_user.clickResetAppState()
     })
it("should filter products by Z to A",async()=>{
       await performance_glitch_user.FilterProducts()
       await performance_glitch_user.FilterProductsByZtoA()
        await browser.pause(5000)
     })

})

