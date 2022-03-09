const changeByClass = (targetClass: string) => {
  let changeElement: HTMLElement;
  let elementArray: Array<HTMLElement> = [];
  elementArray = Array.prototype.slice.call(document.getElementsByClassName(targetClass));
  for (changeElement of elementArray){
    changeElement.style.fontSize = '100px';
  }
};
changeByClass('change');