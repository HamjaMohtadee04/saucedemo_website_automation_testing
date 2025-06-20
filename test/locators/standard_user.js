class standard_user{
    get BurgerMenu(){
        return $('//button[@id="react-burger-menu-btn"]')
    }
    get ResetAppState(){
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

    get ProductNamesOnCheckoutPage() {
    return $$("//div[@class='inventory_item_name']");
}
get ProductPricesOnCheckoutPage() {
    return $$("//div[@class='inventory_item_price']");
}
get ItemTotalPrice() {
    return $("//div[@class='summary_subtotal_label']");
}
get TaxPrice() {
    return $("//div[@class='summary_tax_label']");
}
get TotalWithTax() {
    return $("//div[@class='summary_total_label']");
}

get FinishButton(){
    return $("//button[@id='finish']")
}

get SuccessfulOrderMessage(){
    return $("//h2[@data-test='complete-header']")
}

get LogOutButton(){
    return $("//a[@id='logout_sidebar_link']")
}

}








module.exports = new standard_user()