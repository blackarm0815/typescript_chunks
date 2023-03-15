const deleteByClass = () => {
  const deleteThese = Array.prototype.slice.call(document.getElementsByClassName('delete'));
  deleteThese.forEach((target: HTMLElement) => {
    if (target.parentNode !== null) {
      target.parentNode.removeChild(target);
    }
  });
};
const doStuffButton = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', deleteByClass);
}
