"use strict";
var changeByClass = function () {
    var changeElement;
    var elementArray = [];
    elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
    for (var _i = 0, elementArray_1 = elementArray; _i < elementArray_1.length; _i++) {
        changeElement = elementArray_1[_i];
        changeElement.style.fontSize = '50px';
    }
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', changeByClass);
}
