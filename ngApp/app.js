var myApp = angular.module("myApp", ["ui.router", "ngCookies"]);
myApp.controller("MainController", MainController);
myApp.controller("ProductController", ProductController);
myApp.controller("DetailsController", DetailsController);
myApp.controller("LoginController", LoginController);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider.state("main",{
        url:"/",
        templateUrl:"/ngApp/Views/main.html",
        controller: MainController,
        controllerAs: "controller"
    }).state("product",{
        url:"/product",
        templateUrl:"/ngApp/Views/product.html",
        controller: ProductController,
        controllerAs: "controller"
    }).state("shirts",{
        url:"/shirts",
        templateUrl:"/ngApp/Views/shirts.html",
        controller: ShirtsController,
        controllerAs: "controller" 
    }).state("shoes",{
        url:"/shoes",
        templateUrl:"/ngApp/Views/shoes.html",
        controller: ShoesController,
        controllerAs: "controller" 
    }).state("details",{
        url:"/details/:id",
        templateUrl:"/ngApp/Views/details.html",
        controller: DetailsController,
        controllerAs: "controller"
    }).state("login",{
        url:"/login",
        templateUrl:"/ngApp/Views/login.html",
        controller: LoginController,
        controllerAs: "controller"                 
    });
    $urlRouterProvider.otherwise("/notFound");
    $locationProvider.html5Mode(true);
});