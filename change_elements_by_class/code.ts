let changeElement: HTMLElement;
let elementArray: Array<HTMLElement> = [];
elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
for (changeElement of elementArray){
  changeElement.style.fontSize = '100px';
}