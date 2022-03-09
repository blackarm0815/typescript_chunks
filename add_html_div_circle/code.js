"use strict";
var divCircle = function (parentDiv, xPos, yPos, radius) {
    var left = xPos - radius;
    var top = yPos - radius;
    var diameter = radius * 2;
    var newDiv;
    newDiv = document.createElement('div');
    newDiv.style.position = 'absolute';
    newDiv.style.top = top.toString() + 'px';
    newDiv.style.left = left.toString() + 'px';
    newDiv.style.width = diameter.toString() + 'px';
    newDiv.style.height = diameter.toString() + 'px';
    newDiv.style.borderRadius = radius.toString() + 'px';
    newDiv.classList.add('red');
    parentDiv.appendChild(newDiv);
    return newDiv;
};
var parentDiv;
parentDiv = document.getElementById('main');
if (parentDiv !== null) {
    divCircle(parentDiv, 200, 200, 150);
}
