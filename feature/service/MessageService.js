var app = angular.module("myapp")

app.service("MessageService", function(){
    var messages = {}

    messages.message1 = "Hello from Service"
    messages.message2 = "I am confused today!!!!"
    messages.makeFriend = function(){
        var name = prompt("Your name: ")
        return name
    }

    return messages
})