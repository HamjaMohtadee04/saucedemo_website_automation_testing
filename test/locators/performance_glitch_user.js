class performance_glitch_user{
  get FilterButton(){
    return $("//select[@data-test='product-sort-container']")
  }
  get FilterByZtoA(){
    return $("//option[contains(text(),'Name (Z to A)')]")
  }
  get AddFirstProduct(){
    return $("//button[contains(@id, 'add-to-cart-test.allthethings')]")
  }
  get CartIcon(){
        return $("//a[contains(@class, 'shopping_cart_link')]")
    }
        get CheckoutButton(){
        return $("//button[@data-test='checkout']")
    }

    get productName(){
        return $("//div[text()='Test.allTheThings() T-Shirt (Red)']")
    }
        get productPrice() {
        return $("//div[@class='inventory_item_price']");
    }

    get tax() {
        return $("//div[contains(text(), 'Tax:')]");
    }

    get totalPrice() {
        return $("//div[contains(text(), 'Total:')]");
    }
}

module.exports = new performance_glitch_user