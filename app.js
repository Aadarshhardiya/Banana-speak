
// var username = prompt("Give me your username")
// alert("this script is working!! " +username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "translated: " + txtInput.value
}

btnTranslate.addEventListener("click", clickHandler)