const login = require('./locked_out_user')

class standard_user{
    get BurgerMenu(){
        return $('//button[@id="react-burger-menu-btn"]')
    }
    get ResetSideBar(){
        return $('//a[@id="reset_sidebar_link"]')
    }
}

module.exports = new standard_user()