var app = angular.module("myapp")

app.filter("replaceWithPound", function(){
    return function(parameter){
        var newString = parameter.replace("@", "#")
        return newString
    }
})

app.filter("arrayFilter", function(){
    return function(parameter){
        console.log(parameter)

    }
})