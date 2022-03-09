"use strict";
var mainElement;
var svgCanvas;
var svgCanvasHeight = 100;
var svgCanvasWidth = 100;
mainElement = document.getElementById('main');
if (mainElement !== null) {
    svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCanvas.setAttribute('height', svgCanvasHeight.toString() + 'px');
    svgCanvas.setAttribute('width', svgCanvasWidth.toString() + 'px');
    svgCanvas.setAttribute('class', 'svgCanvas');
    mainElement.appendChild(svgCanvas);
}
