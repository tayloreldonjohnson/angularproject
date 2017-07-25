class LoginController{
    constructor($state){
        this.state = $state;
        this.email = "";
        this.password = "";
    }

    login(){
        this.state.go("main");
    }
}