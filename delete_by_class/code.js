"use strict";
var deleteByClass = function (targetClass) {
    var deleteThese = [];
    deleteThese = Array.prototype.slice.call(document.getElementsByClassName(targetClass));
    deleteThese.forEach(function (target) {
        if (target.parentNode !== null) {
            target.parentNode.removeChild(target);
        }
    });
};
deleteByClass('delete');
