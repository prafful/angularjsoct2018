var app = angular.module("myapp")

app.service("remoteService", function($http){
    var remote = {}

    remote.getRemoteData = function(){
        return $http.get("http://localhost:3000/users")
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

    remote.postRemoteData = function(rcv1, rcv2, rcv3){
        console.log("From post remote service " + rcv1 + ", " + rcv2 + ", " + rcv3 );
        var postData = {
                        "name":rcv1,
                        "email":rcv2,
                        "website":rcv3
                    }
        return $http.post("http://localhost:3000/users", postData)
                .then(function(response){
                    console.log("Post Data Success")
                    console.log(response.data)
                    return response.data
                }, function(response){
                    console.log("Post Data Failure")
                    console.log(response.data)
                    return response.data
                })            
    }

    return remote;


})