let mainElement: HTMLElement | null;
let svgCanvas: SVGSVGElement;
const svgCanvasHeight: number = 100;
const svgCanvasWidth: number = 100;
mainElement = document.getElementById('main');
if (mainElement !== null) {
  svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgCanvas.setAttribute('height', svgCanvasHeight.toString() + 'px');
  svgCanvas.setAttribute('width', svgCanvasWidth.toString() + 'px');
  svgCanvas.setAttribute('class', 'svgCanvas');
  mainElement.appendChild(svgCanvas);
}
