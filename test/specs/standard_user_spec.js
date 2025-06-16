const standard_user_login = require('../pages/locked_out_user_login');

const username = "standard_user"
const password = "secret_sauce"

describe("standard_user login test",()=>{

    it("should login standard_user",async()=>{
       
        await standard_user_login.LogIn(username,password)
        await browser.pause(30000)
    })

})



