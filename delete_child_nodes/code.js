"use strict";
var deleteChildById = function (targetId) {
    var myNode = document.getElementById(targetId);
    if (myNode !== null) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
};
deleteChildById('foo');
