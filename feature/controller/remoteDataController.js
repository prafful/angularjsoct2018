var app = angular.module("myapp", [])

app.controller("remoteDataController", function($scope, remoteService){

    $scope.callRemoteData = function(){
        $scope.usersData  = remoteService.getRemoteData()
        //$scope.usersData contains the promise
        $scope.usersData.then( function(data){
            console.log("Inside Success")
            console.log(data)
            $scope.users = data
        })
        //console.log("Remote Data")
        //console.log($scope.usersData)
    }



})