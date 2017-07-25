class BaseController{
    constructor($authService, $state){
        this._authService = $authService;
        this._state = $state;
    }

    get authService() { return this._authService; }
    get state() { return this._state; }
    get isLoggedIn() { return this.authService.isLoggedIn(); }

    logout() {
        this.authService.logoutUser();
        this.state.go("main");
    }
}
