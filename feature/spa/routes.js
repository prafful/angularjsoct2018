var app = angular.module("myapp",["ngRoute"])

app.config(function($routeProvider){

    $routeProvider.when("/home", {
                                    "templateUrl":'/spatemplate/home.html',
                                    "controller":"homeController"
                                })
                    .when("/about/:childroute",{
                        "template":`<h1>{{companyname}}: This is about us!</h1>
                                    <h3>I am Branch {{childurl}}</h3>`,
                        "controller":"aboutController"
                    })
                    .when("/contact",{
                        "templateUrl":"/spatemplate/contact.html"
                    })
                    .otherwise({
                        "template":"<h1>Welcome to SPA!!!!</h1>"
                    })

})

app.controller("homeController", function($scope){

    $scope.location = "Chennai"

})

app.controller("aboutController", function($scope, $routeParams){
    $scope.companyname = "Cognizant"
    $scope.childurl=$routeParams.childroute
})
