const locked_out_user = require('../locators/locked_out_user');

class locked_out_user_Account{
     async enterUsername(Username){
        await locked_out_user.Username.setValue(Username)
        await browser.pause(3000)
    }
    async enterPassword(password){
    await locked_out_user.Password.setValue(password)
    }
    async SignIn(){
    await locked_out_user.buttonLogin.click()
}
async LogIn(username,password){
  await this.enterUsername(username)
  await this.enterPassword(password)
  await this.SignIn()
}

async showErrorMessage(){
  
  return await locked_out_user.ErrorMessage.getText()
}
}
module.exports = new locked_out_user_Account()


