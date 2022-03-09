const pageResizeDivs = () => {
  let divElement: HTMLElement | null;
  let divHeight: number = 0;
  let divLeft: number = 0;
  let divTop: number = 0;
  let divWidth: number = 0;
  let topBorder: number = 10;
  let topForegroundBottom: number = 0;
  let rightMargin: number = 5;
  let bottomMargine: number = 5;
  Promise.resolve()
    .then(() => {
      // resize the top div to fit the width of the page
      divElement = document.getElementById('topForeground');
      if (divElement) {
        divLeft = topBorder;
        divTop = topBorder;
        divWidth = window.innerWidth - (topBorder * 2) - rightMargin;
        divElement.style.left = `${divLeft}px`;
        divElement.style.top = `${divTop}px`;
        divElement.style.width = `${divWidth}px`;
      }
    })
    .then(() => {
    // find the bottom edge of the topForeground div
      if (divElement) {
        topForegroundBottom = divElement.offsetTop + divElement.getBoundingClientRect().height;
      }
      // resize the topBackground div
      divElement = <HTMLElement>document.getElementById('topBackground');
      if (divElement) {
        divHeight = topForegroundBottom + topBorder;
        divLeft = 0;
        divTop = 0;
        divWidth = window.innerWidth - rightMargin;
        divElement.style.height = `${divHeight}px`;
        divElement.style.left = `${divLeft}px`;
        divElement.style.top = `${divTop}px`;
        divElement.style.width = `${divWidth}px`;
      }
      // resize the main div
      divElement = <HTMLElement>document.getElementById('main');
      if (divElement) {
        divHeight = window.innerHeight - topForegroundBottom - topBorder - bottomMargine;
        divLeft = 0;
        divTop = topForegroundBottom + topBorder;
        divWidth = window.innerWidth - rightMargin;
        divElement.style.height = `${divHeight}px`;
        divElement.style.left = `${divLeft}px`;
        divElement.style.top = `${divTop}px`;
        divElement.style.width = `${divWidth}px`;
      }
    });
};
const setTriggers = () => {
  let toggle: HTMLElement | null = null;
  toggle = document.getElementById('showDivs');
  if (toggle !== null) {
    toggle.addEventListener('change', recolorDivs);
  }
  window.addEventListener('resize', pageResizeDivs);
};
const recolorDivs = () => {
  let toggle: HTMLInputElement | null = null;
  let divElement: HTMLElement | null = null;
  toggle = <HTMLInputElement>document.getElementById('showDivs');
  if (toggle !== null) {
    if (toggle.checked) {
      divElement = document.getElementById('topBackground');
      if (divElement !== null) {
        divElement.className = 'topVisible';
      }
      divElement = document.getElementById('main');
      if (divElement !== null) {
        divElement.className = 'mainVisible';
      }
    } else {
      divElement = document.getElementById('topBackground');
      if (divElement !== null) {
        divElement.className = 'topDefault';
      }
      divElement = document.getElementById('main');
      if (divElement !== null) {
        divElement.className = 'mainDefault';
      }
    }
  }
};
recolorDivs();
setTriggers();
pageResizeDivs();