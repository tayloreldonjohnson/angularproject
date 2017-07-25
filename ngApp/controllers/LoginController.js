class LoginController{
    constructor($state){
        this.state = $state;
        this.email = localStorage.getItem("email");
        this.password = "";


    }

    login(email, password){
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
                
        this.state.go("main");
    }
    
    logout(){
        
    }
    }