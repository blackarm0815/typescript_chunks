"use strict";
var changeByClass = function () {
    var elementArray = [];
    elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
    elementArray.forEach(function (changeElement) {
        changeElement.style.fontSize = '50px';
    });
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', changeByClass);
}
