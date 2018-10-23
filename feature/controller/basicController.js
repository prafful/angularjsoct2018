var app = angular.module("myapp",[])
app.controller('myHeaderController',function($scope){

    //controller starts

    $scope.fname = "Prafful"
    $scope.lname = "Daga"
    $scope.name = {
        firstname:'Ola',
        lastname:'Kola'
    }
    $scope.scores = [10, 13, 14, 80, 56]
    $scope.bgcolor = "lightpink"

    $scope.allTask = ["One", "Two", "Three", "Four"]

    $scope.addTask = function(){
        $scope.allTask.push($scope.newTask)
        console.log($scope.allTask)
        $scope.newTask = ""

    }

    $scope.removeTask = function(current){
        console.log("Removing task" + current)
        $scope.allTask.splice(current, 1)

    }

    //controller ends
})
