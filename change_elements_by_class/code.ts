const changeByClass = () => {
  const elementArray = Array.prototype.slice.call(document.getElementsByClassName('change'));
  elementArray.forEach((changeElement) => {
    const temp = <HTMLParagraphElement>changeElement;
    if (temp !== null) {
      temp.style.fontSize = '50px';
    }
  });
};
const doStuffButton = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', changeByClass);
}
