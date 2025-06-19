class performance_glitch_user{
  get FilterButton(){
    return $("//select[@data-test='product-sort-container']")
  }
  get FilterByZtoA(){
    return $("//option[contains(text(),'Name (Z to A)')]")
  }
  get AddFirstProduct(){
    return $("//button[contains(@id, 'add-to-cart-test.allthethings')")
  }
}

module.exports = new performance_glitch_user