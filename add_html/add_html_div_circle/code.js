"use strict";
var divCircle = function (parentDiv, xPos, yPos, radius) {
    var left = xPos - radius;
    var top = yPos - radius;
    var diameter = radius * 2;
    var newDiv = document.createElement('div');
    newDiv.style.position = 'absolute';
    newDiv.style.top = "".concat(top.toString(), "px");
    newDiv.style.left = "".concat(left.toString(), "px");
    newDiv.style.width = "".concat(diameter.toString(), "px");
    newDiv.style.height = "".concat(diameter.toString(), "px");
    newDiv.style.borderRadius = "".concat(radius.toString(), "px");
    newDiv.classList.add('red');
    parentDiv.appendChild(newDiv);
    return newDiv;
};
var parentDiv = document.getElementById('main');
if (parentDiv !== null) {
    divCircle(parentDiv, 200, 200, 150);
}
