const standard_user_locators= require('../locators/standard_user');

class standard_user{
    async clickOnBurgerMenu(){
        await standard_user_locators.BurgerMenu.click()
    }
    async clickResetAppState(){
        await standard_user_locators.ResetAppState.click()    
    }

    async AddingProductsToCart(){
        await standard_user_locators.Backpack.click()
        await standard_user_locators.BikeLight.click()
        await standard_user_locators.BoltT_shirt.click()
    }
    async clickOnCartIcon(){
        await standard_user_locators.CartIcon.click()
    }
    async clickOnCheckoutButton(){
       await standard_user_locators.CheckoutButton.click()
    }

async EnterFirstName(firstName){
    await standard_user_locators.CheckoutFirstName.setValue(firstName)
}
async EnterLastName(lastName){
    await standard_user_locators.CheckoutLastName.setValue(lastName)
}
async EnterPostalCode(postalCode){
    await standard_user_locators.CheckoutPostalCode.setValue(postalCode)
}

async FillCheckoutForm(firstName,lastName,postalCode){
    await this.EnterFirstName(firstName)
    await this.EnterLastName(lastName)
    await this.EnterPostalCode(postalCode)
    }

    async ClickOnCheckoutContinueButton(){
        await standard_user_locators.CheckoutContinueButton.click()
    }

    //validation
async getProductNamesText() {
    const elements = await standard_user_locators.ProductNamesOnCheckoutPage;
    const names = [];
    for (let i = 0; i < elements.length; i++) {
        const name = await elements[i].getText();
        names.push(name);
    }
    return names;
}

async getProductPricesText() {
    const elements = await standard_user_locators.ProductPricesOnCheckoutPage;
    const prices = [];
    for (let i = 0; i < elements.length; i++) {
        const priceText = await elements[i].getText();
        prices.push(priceText);
    }
    return prices;
}

async getItemTotalText() {
    return await standard_user_locators.ItemTotalPrice.getText();
}

async getTaxText() {
    return await standard_user_locators.TaxPrice.getText();
}

async getTotalWithTaxText() {
    return await standard_user_locators.TotalWithTax.getText();
}

async getFinishButton(){
    await standard_user_locators.FinishButton.click()
}

async getSuccessfulOrderMessage(){
     return await standard_user_locators.SuccessfulOrderMessage.getText()
}

async ClickLogoutButton(){
    return standard_user_locators.LogOutButton.click()
}



}
module.exports = new standard_user