var app = angular.module("myapp", [])

app.controller("myController", function($scope){
    $scope.currentDate = new Date()

    $scope.friends =["Raymond", "John", "Jake", "Paul", "Michael", "Karlin", "McGraw", "Sudarshan", "Krishna", "Purshottaman"]



})