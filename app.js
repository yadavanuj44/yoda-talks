var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}
console.log(txtInput);
btnTranslate.addEventListener("click", function clickEventHandler()
{
    var inputtext = txtInput.value;
    fetch(getTranslationUrl(inputtext)).then(
        response => response.json()
    ).then(json => outputDiv.innerText = json.contents.translated).catch(error => outputDiv.innerText = "Error in server: " + error);
})