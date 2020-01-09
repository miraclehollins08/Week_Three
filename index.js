var HelloWorld = [
    "Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily", "Max", "Tyler"
]
var HelloList = document.getElementById("Hello")

for (var i = 0; i < HelloWorld.length; i++) {
    HelloList.innerHTML += "<li>HelloWorld[0]</li>"
}


var Const_Name = [
    "Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"
]
var ConstList = document.getElementById("Const")

for (var i = 0; i < Const_Name.length; i++) {
    ConstList.innerHTML += "<li>" + Const_Name[i] + "</li>"
}
