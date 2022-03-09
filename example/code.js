"use strict";
var doStuff = function () {
    var outputDiv = document.getElementById('output');
    if (outputDiv !== null) {
        outputDiv.innerText = 'thank you. :)';
    }
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', doStuff);
}
