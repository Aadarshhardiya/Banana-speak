
// var username = prompt("Give me your username")
// alert("this script is working!! " +username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickHandler() {
    console.log("clicked!!");
    console.log("input", txtInput.value);    
};

btnTranslate.addEventListener("click", clickHandler)