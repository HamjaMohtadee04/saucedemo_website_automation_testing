class locked_out_user{
     get Username(){
        return $("//input[@id='user-name']")
    }
    get Password(){
        return $("//input[@id='password']")
    }
    get buttonLogin(){
        return $("//input[@id='login-button']")
    }
    get ErrorMessage(){
         return $('[data-test="error"]');
    }
}
module.exports = new locked_out_user()