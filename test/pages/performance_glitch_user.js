const performance_glitch_user_locators = require('../locators/performance_glitch_user');

class performance_glitch_user{
    async FilterProducts(){
        await performance_glitch_user_locators.FilterButton.click()
    }
    async FilterProductsByZtoA(){
        await performance_glitch_user_locators.FilterByZtoA.click()
    }
}

module.exports = new performance_glitch_user()