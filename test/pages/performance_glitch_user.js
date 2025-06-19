const performance_glitch_user_locators = require('../locators/performance_glitch_user');

class performance_glitch_user{
      async clickOnBurgerMenu(){
            await performance_glitch_user_locators.BurgerMenu.click()
        }
        async clickResetAppState(){
            await performance_glitch_user_locators.ResetAppState.click()    
        }
    async FilterProducts(){
        await performance_glitch_user_locators.FilterButton.click()
    }
    async FilterProductsByZtoA(){
        await performance_glitch_user_locators.FilterByZtoA.click()
    }
    async AddProduct(){
        await performance_glitch_user_locators.AddFirstProduct.click()
    }
    async CartIcon(){
        await performance_glitch_user_locators.CartIcon.click()
    }
    async CheckOutButton(){
        await performance_glitch_user_locators.CheckoutButton.click()
    }
    async getProductName(){
    const product = await performance_glitch_user_locators.productName.getText()
    return product
    }
    async getProductPrice() {
    return await performance_glitch_user_locators.productPrice.getText();
}

async getTaxText() {
    return await performance_glitch_user_locators.tax.getText();
}

async getTotalWithTaxText() {
    return await performance_glitch_user_locators.totalPrice.getText();
}
async clickFinishButton(){
    await performance_glitch_user_locators.FinishButton.click()
}
async getSuccessfulOrderMessage(){
     return await performance_glitch_user_locators.SuccessfulOrderMessage.getText()
}
async Logout(){
    await performance_glitch_user_locators.LogOutButton.click()
}
}

module.exports = new performance_glitch_user()