var app = angular.module("myapp", ['angularUtils.directives.dirPagination'])

app.controller("PaginationController", function($scope, remoteService){

    /* $scope.get5000Photos = remoteService.get5000Records()
    $scope.get5000Photos.then(function(response){
        $scope.photos = response.data
    }) */

    $scope.test = "hellosdf" 

    $scope.get5000 = function(){
        $scope.get5000Photos = remoteService.get5000Records()
        $scope.get5000Photos.then(function(response){
            $scope.photos = response
            console.log("In controller 5000 promise")
            console.log($scope.photos)
        })
    }

})
