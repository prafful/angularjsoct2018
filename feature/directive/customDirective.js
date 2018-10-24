var app = angular.module("myapp", [])

app.directive("pdElement", function(){
    return{
        template:"<h2>I am custom element Directive!!!!</h2>",
        restrict: 'E'

    }
})

app.directive("pdAttribute", function(){
    return {
        template: "<h2>I am custom attribute Directive!!!!</h2>",
        restrict:"A"
    }
})


app.directive("pdClass", function(){
    return {
        template:"<h2>I am custom class Directive!!!!</h2>",
        restrict:'C'
    }
})

