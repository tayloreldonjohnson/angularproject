class AuthService{
    constructor($cookies){
        this.cookies = $cookies;
        this.cookieKey = "UserId";
    }

    isLoggedIn(){
        var val = this.cookies.get(this.cookieKey);
        if (val !== null && val !== undefined){
            return true;
        } else {
            return false;
        }       
    }

    loginUser(userName, password){
        this.cookies.put(this.cookieKey, "123abc");
    }

    logoutUser(){
        this.cookies.remove(this.cookieKey);
    }
}