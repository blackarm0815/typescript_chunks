"use strict";
var deleteThese = [];
deleteThese = Array.prototype.slice.call(document.getElementsByClassName('delete'));
deleteThese.forEach(function (target) {
    if (target.parentNode !== null) {
        target.parentNode.removeChild(target);
    }
});
