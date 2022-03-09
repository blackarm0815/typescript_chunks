function divCircle(parentDiv, xPos, yPos, radius) {
    var left = xPos - radius;
    var top = yPos - radius;
    var diameter = radius * 2;
    var newDiv;
    newDiv = document.createElement('div');
    newDiv.style.position = "absolute";
    newDiv.style.top = top.toString() + "px";
    newDiv.style.left = left.toString() + "px";
    newDiv.style.width = diameter.toString() + "px";
    newDiv.style.height = diameter.toString() + "px";
    newDiv.style.borderRadius = radius.toString() + "px";
    parentDiv.appendChild(newDiv);
    return newDiv;
}
var parentDiv;
var circleDiv;
parentDiv = document.getElementById('main');
if (parentDiv !== null) {
    circleDiv = divCircle(parentDiv, 200, 200, 150);
    circleDiv.style.backgroundColor = "rgb(255,100,0)";
}
