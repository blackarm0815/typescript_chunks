function pageDivDimensions() {
  let divElement: HTMLElement | null;
  let pageWidth: number;
  let pageHeight: number;
  pageWidth = window.innerWidth;
  pageHeight = window.innerHeight;
  // alpha
  divElement = document.getElementById('alpha');
  if (divElement) {
    divElement.style.left = (pageWidth * 0.1) + 'px';
    divElement.style.top = (pageHeight * 0.1) + 'px';
    divElement.style.width = (pageWidth * 0.3) + 'px';
    divElement.style.height = (pageHeight * 0.3) + 'px';
  }
  // bravo
  divElement = document.getElementById('bravo');
  if (divElement) {
    divElement.style.left = (pageWidth * 0.6) + 'px';
    divElement.style.top = (pageHeight * 0.1) + 'px';
    divElement.style.width = (pageWidth * 0.3) + 'px';
    divElement.style.height = (pageHeight * 0.3) + 'px';
  }
  // charlie
  divElement = document.getElementById('charlie');
  if (divElement) {
    divElement.style.left = (pageWidth * 0.1) + 'px';
    divElement.style.top = (pageHeight * 0.6) + 'px';
    divElement.style.width = (pageWidth * 0.3) + 'px';
    divElement.style.height = (pageHeight * 0.3) + 'px';
  }
  // delta
  divElement = document.getElementById('delta');
  if (divElement) {
    divElement.style.left = (pageWidth * 0.6) + 'px';
    divElement.style.top = (pageHeight * 0.6) + 'px';
    divElement.style.width = (pageWidth * 0.3) + 'px';
    divElement.style.height = (pageHeight * 0.3) + 'px';
  }
}
window.addEventListener('resize', pageDivDimensions);
pageDivDimensions();