var app = angular.module("myapp", ["ngRoute"])

app.config(function($routeProvider){

    $routeProvider.when("/:id",{
        "template":`Path : {{receivedId}} <br>
                    Name: {{users[receivedId].name}} <br>
                    Email: {{users[receivedId].email}} <br>
                    Latitude: {{users[receivedId].address.geo.lat}} <br>
                    Latitude: {{users[receivedId].address.geo.lng}} <br>
                    Website: {{users[receivedId].website}}`,
        "controller":"remoteDataController"
    })

})



app.controller("remoteDataController", function($scope, remoteService, $routeParams){

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

    $scope.receivedId = $routeParams.id

    $scope.addUser = function(){
        console.log("I am inside add user...." + $scope.formName + ", " + $scope.formEmail + ", " + $scope.formWebsite)
        $scope.usersData  = remoteService.postRemoteData($scope.formName, $scope.formEmail, $scope.formWebsite )
        //$scope.usersData contains the promise
        $scope.usersData.then( function(data){
            console.log("Inside Update Success")
            console.log(data)
            $scope.users = data
        })
    }   


})