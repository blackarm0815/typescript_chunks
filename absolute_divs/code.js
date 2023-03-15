"use strict";
var pageDivDimensions = function () {
    var divElement;
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    // alpha
    divElement = document.getElementById('alpha');
    if (divElement) {
        divElement.style.left = "".concat((pageWidth * 0.1), "px");
        divElement.style.top = "".concat((pageHeight * 0.1), "px");
        divElement.style.width = "".concat((pageWidth * 0.3), "px");
        divElement.style.height = "".concat((pageHeight * 0.3), "px");
    }
    // bravo
    divElement = document.getElementById('bravo');
    if (divElement) {
        divElement.style.left = "".concat((pageWidth * 0.6), "px");
        divElement.style.top = "".concat((pageHeight * 0.1), "px");
        divElement.style.width = "".concat((pageWidth * 0.3), "px");
        divElement.style.height = "".concat((pageHeight * 0.3), "px");
    }
    // charlie
    divElement = document.getElementById('charlie');
    if (divElement) {
        divElement.style.left = "".concat((pageWidth * 0.1), "px");
        divElement.style.top = "".concat((pageHeight * 0.6), "px");
        divElement.style.width = "".concat((pageWidth * 0.3), "px");
        divElement.style.height = "".concat((pageHeight * 0.3), "px");
    }
    // delta
    divElement = document.getElementById('delta');
    if (divElement) {
        divElement.style.left = "".concat((pageWidth * 0.6), "px");
        divElement.style.top = "".concat((pageHeight * 0.6), "px");
        divElement.style.width = "".concat((pageWidth * 0.3), "px");
        divElement.style.height = "".concat((pageHeight * 0.3), "px");
    }
};
window.addEventListener('resize', pageDivDimensions);
pageDivDimensions();
