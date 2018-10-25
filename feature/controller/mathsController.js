var app = angular.module("myapp", [])

app.controller("MathsController", function($scope, CalcFactory, MessageService, $location, $interval){
    
   /*  $scope.doAdd = function(){
        $scope.sum = $scope.number1 + $scope.number2
    }
 */
   
    $scope.doAdd = function(){
        $scope.sum = CalcFactory.doAddtion($scope.number1, $scope.number2)
    }
    
    $scope.doMultiply = function(){
        $scope.multiple=CalcFactory.doMultiplication($scope.number1, $scope.number2) 
    }

    $scope.factoryMessage = CalcFactory.message

    $scope.msg1 = MessageService.message1
    $scope.msg2 = MessageService.message2

    $scope.addFriend = function(){
        $scope.friendName = MessageService.makeFriend()
    }

    $scope.address = $location.absUrl()


    $interval(function(){
        $scope.currentTime = new Date()
    }, 1000)

})

