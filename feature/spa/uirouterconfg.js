var app = angular.module("myapp",["ui.router", "ngAnimate"])

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home")

    $stateProvider.state("home",{
                                    url:'/home',
                                    templateUrl:'/spatemplate/home.html',
                                    controller:'homeController'
                                })
                    .state("about",{
                                        url:'/about',
                                        template:'<h1>{{companyname}}: This is about us!</h1>',
                                        controller:'aboutController'
                                    })
                    .state("contact",{
                                        url:'/contact',
                                        templateUrl:'/spatemplate/contact.html'
                                    })



})

app.controller("homeController", function($scope){

    $scope.location = "Chennai"

})

app.controller("aboutController", function($scope){
    $scope.companyname = "Cognizant"
    //$scope.childurl=$routeParams.childroute
})
