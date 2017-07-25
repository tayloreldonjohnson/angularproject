class LoginController extends BaseController{
    constructor($authService, $state){
        super($authService, $state);
        this.email = "";
        this.password = "";
    }
        
    login(){
        this.authService.loginUser(this.email, this.password);
        this.state.go("main");
    }        
}    