var app = angular.module("myapp")

app.factory("CalcFactory", function(){
    var maths = {}
    maths.message = "Hello from factory!!!!"
    
    maths.doAddtion = function(n1, n2){
        return n1+n2
    }

    maths.doMultiplication = function(n1, n2){
        return n1*n2
    }
    
    return maths
    
})