"use strict";
var deleteByClass = function () {
    var deleteThese = [];
    deleteThese = Array.prototype.slice.call(document.getElementsByClassName('delete'));
    deleteThese.forEach(function (target) {
        if (target.parentNode !== null) {
            target.parentNode.removeChild(target);
        }
    });
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', deleteByClass);
}
