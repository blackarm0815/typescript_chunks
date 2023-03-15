let dragHorizontalPosition = 200;
//
const pageDivDimensions = () => {
  const border = 5;
  let divElement: HTMLElement | null;
  const lineThickness = 3;
  let topDivUnder: number;
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;
  const topElement = document.getElementById('top');
  topDivUnder = 0;
  if (topElement) {
    const rect = topElement.getBoundingClientRect();
    topDivUnder = rect.top + rect.height + border;
  }
  // alpha
  divElement = document.getElementById('alpha');
  if (divElement) {
    divElement.style.left = `${border}px`;
    divElement.style.top = `${topDivUnder}px`;
    divElement.style.width = `${(dragHorizontalPosition - (lineThickness * 0.5) - (border * 2))}px`;
    divElement.style.height = `${(pageHeight - topDivUnder - (border * 2))}px`;
  }
  // bravo
  divElement = document.getElementById('bravo');
  if (divElement) {
    divElement.style.left = `${(dragHorizontalPosition + border + (lineThickness * 0.5))}px`;
    divElement.style.top = `${topDivUnder}px`;
    divElement.style.width = `${(pageWidth - dragHorizontalPosition - (border * 2) - (lineThickness * 0.5))}px`;
    divElement.style.height = `${(pageHeight - topDivUnder - (border * 2))}px`;
  }
  // horizontalDrag
  divElement = document.getElementById('horizontalDrag');
  if (divElement) {
    divElement.style.left = `${(dragHorizontalPosition - (lineThickness * 0.5))}px`;
    divElement.style.top = `${topDivUnder}px`;
    divElement.style.width = `${lineThickness}px`;
    divElement.style.height = `${(pageHeight - topDivUnder - (border * 2))}px`;
  }
};
const repositionDrag = (
  mouseEvent: MouseEvent,
) => {
  dragHorizontalPosition = mouseEvent.x;
  pageDivDimensions();
};
const dragSetup = () => {
  const dragHorizontal = document.getElementById('horizontalDrag');
  if (dragHorizontal) {
    dragHorizontal.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', repositionDrag, false);
    }, false);
  }
  // deactivating drag actions when mouse button is released
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', repositionDrag, false);
  }, false);
};
dragSetup();
window.addEventListener('resize', pageDivDimensions);
pageDivDimensions();
