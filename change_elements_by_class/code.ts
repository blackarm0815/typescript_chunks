const changeByClass = () => {
  let elementArray: Array<HTMLElement> = [];
  elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
  elementArray.forEach((changeElement) => {
    changeElement.style.fontSize = '50px';
  });
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', changeByClass);
}