const login = require('./locked_out_user')

class standard_user{
    get BurgerMenu(){
        return $('//button[@id="react-burger-menu-btn"]')
    }
    get ResetSideBar(){
        return $('//a[@id="reset_sidebar_link"]')
    }
    get Backpack(){
        return $('//button[contains(@id, "backpack")]')
    }
    get BikeLight(){
        return $('//button[contains(@id, "bike-light")]')
    }
    get BoltT_shirt(){
        return $('//button[contains(@id, "bolt-t-shirt")]')
    }
    get CartIcon(){
        return $("//a[contains(@class, 'shopping_cart_link')]")
    }
    get CheckoutButton(){
        return $("//button[@data-test='checkout']")
    }
    get CheckoutFirstName(){
        return $("//input[@data-test='firstName']")
    }
    get CheckoutLastName(){
        return $("//input[@data-test='lastName']")
    }
    get CheckoutPostalCode(){
        return $("//input[@data-test='postalCode']")
    }
    get CheckoutContinueButton(){
        return $("//input[@data-test='continue']")
    }
}

module.exports = new standard_user()