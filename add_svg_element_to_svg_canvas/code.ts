function colorChange(){
  let target: HTMLElement | null;
  let currentClass: string | null;
  target = document.getElementById('path197');
  if (target !== null) {
    currentClass = target.getAttribute('class');
    if (currentClass == 'target1') {
      target.setAttribute('class', 'target2');
    }
    if (currentClass == 'target2') {
      target.setAttribute('class', 'target1');
    }
  }
}
let mainElement: HTMLElement | null;
let scale: number = 1.0;
let svgCanvas: SVGSVGElement;
let svgCanvasHeight: number = 800;
let svgCanvasWidth: number = 1000;
mainElement = document.getElementById('main');
if (mainElement !== null) {
  // create svg canvas
  svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgCanvas.setAttribute('height', (svgCanvasHeight * scale).toString() + 'px');
  svgCanvas.setAttribute('width', (svgCanvasWidth * scale).toString() + 'px');
  svgCanvas.setAttribute('class', 'svgCanvas');
  mainElement.appendChild(svgCanvas);
  // add element to canvas
  let newpath: SVGElement;
  newpath = document.createElementNS('http://www.w3.org/2000/svg', 'path'); 
  newpath.setAttribute('id', 'path197');
  newpath.setAttribute('d', 'M 200 100 A 100 100 0 0 0 100 200 L 100 500 L 300 500 L 300 240 A 40 40 0 0 1 340 200 L 700 200 L 700 100 L 200 100 z');
  newpath.setAttribute('transform', 'scale(' + scale.toString() + ')');
  newpath.setAttribute('class', 'target1');
  svgCanvas.appendChild(newpath);
  newpath.addEventListener('click', colorChange);
} 