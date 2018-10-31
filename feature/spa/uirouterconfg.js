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
                            template:`<h1>{{companyname}}: This is about us!</h1>
                                        <br> 
                                        Child view: <a ui-sref=".param1">Param1</a>
                                        <div class="page-container">
                                            <div  class="page-view" ui-view></div>
                                        </div>

                                    `,
                            controller:'aboutController'
                        })
        .state("about.param1",{
                            url:"/param1",
                            template:'<h1>{{param1}}: This is branch!</h1>',
                            controller:'aboutChildController'
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

app.controller("aboutChildController", function($scope, $stateParams){
    $scope.param1 = $stateParams.param1
    console.log($stateParams.param1)
})
