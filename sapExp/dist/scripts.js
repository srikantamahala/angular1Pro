var myApp = angular.module('myApp', ["ngRoute"])

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
    .when("/", {
        templateUrl : "../src/templates/main.html",
        controller: "mainController",
        
    })
    .when("/red", {
        templateUrl : "../src/templates/red.html",
        controller: "redController",
        resolve:{
            message:function(myservice){
                return myservice.go(); 
            }
        }
    });
}]);

myApp.run(['$rootScope','$location', function($rootScope, $location){
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        /*if(!localStorage.getItem("token")){
            $location.path('/')
        }*/
       /* if(!loginService.authenticate()){
            alert("not authenticated");
            $location.path('/');
        }*/
        $rootScope.isLoading = true;
        console.log("in location change start")

    })
    $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
        $rootScope.isLoading = false;
        console.log("location change success")

    })
}]);
myApp.controller('mainController', function($scope){
	
	   $scope.main = "message";	
	
	

})
myApp.controller('redController', function($scope,message){
	
	   $scope.main = message;	
	
	

})
myApp.service("myservice", function(){
	this.go = function(){
		setTimeout(function(){
			return "i am going"
		},0)
		
	}
})