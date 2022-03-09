"use strict";
var changeByClass = function (targetClass) {
    var changeElement;
    var elementArray = [];
    elementArray = Array.prototype.slice.call(document.getElementsByClassName(targetClass));
    for (var _i = 0, elementArray_1 = elementArray; _i < elementArray_1.length; _i++) {
        changeElement = elementArray_1[_i];
        changeElement.style.fontSize = '100px';
    }
};
changeByClass('change');
