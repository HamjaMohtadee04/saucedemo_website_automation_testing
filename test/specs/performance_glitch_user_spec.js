const standard_user_login = require('../pages/locked_out_user_login');
const username = "performance_glitch_user"
const password = "secret_sauce"

describe("performance_glitch_user login test",()=>{

    it("should login performance_glitch_user",async()=>{
       
        await standard_user_login.LogIn(username,password)
        await browser.pause(30000)
    })
})

