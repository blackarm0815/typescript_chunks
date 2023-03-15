const makeDivs = () => {
  const boxHeight = 30;
  const boxWidth = 100;
  const countHorizontal = 5;
  const countVertical = 4;
  let divHeight = 0;
  let divInner: HTMLElement;
  let divLeft = 0;
  let divOuter: HTMLElement;
  let divTop = 0;
  let divWidth = 0;
  const divMain = document.getElementById('main');
  if (divMain !== null) {
    for (let countOuter = 0; countOuter < 20; countOuter += 1) {
      divOuter = document.createElement('div');
      divOuter.className = 'outer';
      divWidth = (countHorizontal * (boxWidth + 1)) + 1;
      divHeight = (countVertical * (boxHeight + 1)) + 1;
      divOuter.style.width = `${divWidth}px`;
      divOuter.style.height = `${divHeight}px`;
      divMain.appendChild(divOuter);
      for (let x = 0; x < countHorizontal; x += 1) {
        for (let y = 0; y < countVertical; y += 1) {
          divLeft = (x * (boxWidth + 1)) + 1;
          divTop = (y * (boxHeight + 1)) + 1;
          divInner = document.createElement('div');
          divInner.className = 'inner';
          divInner.style.position = 'absolute';
          divInner.style.height = `${boxHeight}px`;
          divInner.style.left = `${divLeft}px`;
          divInner.style.top = `${divTop}px`;
          divInner.style.width = `${boxWidth}px`;
          divOuter.appendChild(divInner);
        }
      }
    }
  }
};
makeDivs();
