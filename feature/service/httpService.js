var app = angular.module("myapp")

app.service("remoteService", function($http){
    var remote = {}

    remote.getRemoteData = function(){
        return $http.get("http://jsonplaceholder.typicode.com/users")
                .then(successFunction, failureFunction)


                function successFunction(response){
                    console.log("Service Success")
                    console.log(response.data)
                    return response.data
                }

                function failureFunction(response){
                    console.log("Service Failure")
                    console.log(response)
                    return response.status
                }
    }

    return remote;


})