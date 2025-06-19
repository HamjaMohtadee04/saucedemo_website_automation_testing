const performance_glitch_user_locators = require('../locators/performance_glitch_user');

class performance_glitch_user{
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
}

module.exports = new performance_glitch_user()