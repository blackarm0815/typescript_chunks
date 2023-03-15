"use strict";
var svgCanvas;
var svgCanvasHeight = 100;
var svgCanvasWidth = 100;
var mainElement = document.getElementById('main');
if (mainElement !== null) {
    svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCanvas.setAttribute('height', "".concat(svgCanvasHeight.toString(), "px"));
    svgCanvas.setAttribute('width', "".concat(svgCanvasWidth.toString(), "px"));
    svgCanvas.setAttribute('class', 'svgCanvas');
    mainElement.appendChild(svgCanvas);
}
