const standard_user_locators= require('../locators/standard_user');

class standard_user{
    async clickOnBurgerMenu(){
        await standard_user_locators.BurgerMenu.click()
    }
    async clickResetSideBar(){
        await standard_user_locators.ResetSideBar.click()
        
    }
}
module.exports = new standard_user