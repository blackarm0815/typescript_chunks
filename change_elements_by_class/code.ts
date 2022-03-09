const changeByClass = () => {
  let changeElement: HTMLElement;
  let elementArray: Array<HTMLElement> = [];
  elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
  for (changeElement of elementArray){
    changeElement.style.fontSize = '50px';
  }
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', changeByClass);
}