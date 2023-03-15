"use strict";
var dragHorizontalPosition = 200;
//
var pageDivDimensions = function () {
    var border = 5;
    var divElement;
    var lineThickness = 3;
    var topDivUnder;
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    var topElement = document.getElementById('top');
    topDivUnder = 0;
    if (topElement) {
        var rect = topElement.getBoundingClientRect();
        topDivUnder = rect.top + rect.height + border;
    }
    // alpha
    divElement = document.getElementById('alpha');
    if (divElement) {
        divElement.style.left = "".concat(border, "px");
        divElement.style.top = "".concat(topDivUnder, "px");
        divElement.style.width = "".concat((dragHorizontalPosition - (lineThickness * 0.5) - (border * 2)), "px");
        divElement.style.height = "".concat((pageHeight - topDivUnder - (border * 2)), "px");
    }
    // bravo
    divElement = document.getElementById('bravo');
    if (divElement) {
        divElement.style.left = "".concat((dragHorizontalPosition + border + (lineThickness * 0.5)), "px");
        divElement.style.top = "".concat(topDivUnder, "px");
        divElement.style.width = "".concat((pageWidth - dragHorizontalPosition - (border * 2) - (lineThickness * 0.5)), "px");
        divElement.style.height = "".concat((pageHeight - topDivUnder - (border * 2)), "px");
    }
    // horizontalDrag
    divElement = document.getElementById('horizontalDrag');
    if (divElement) {
        divElement.style.left = "".concat((dragHorizontalPosition - (lineThickness * 0.5)), "px");
        divElement.style.top = "".concat(topDivUnder, "px");
        divElement.style.width = "".concat(lineThickness, "px");
        divElement.style.height = "".concat((pageHeight - topDivUnder - (border * 2)), "px");
    }
};
var repositionDrag = function (mouseEvent) {
    dragHorizontalPosition = mouseEvent.x;
    pageDivDimensions();
};
var dragSetup = function () {
    var dragHorizontal = document.getElementById('horizontalDrag');
    if (dragHorizontal) {
        dragHorizontal.addEventListener('mousedown', function () {
            document.addEventListener('mousemove', repositionDrag, false);
        }, false);
    }
    // deactivating drag actions when mouse button is released
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', repositionDrag, false);
    }, false);
};
dragSetup();
window.addEventListener('resize', pageDivDimensions);
pageDivDimensions();
