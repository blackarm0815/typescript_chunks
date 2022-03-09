"use strict";
var deleteChildById = function () {
    var myNode = document.getElementById('foo');
    if (myNode !== null) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', deleteChildById);
}
