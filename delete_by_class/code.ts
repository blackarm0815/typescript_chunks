const deleteByClass = () => {
  let deleteThese: Array<HTMLElement> = [];
  deleteThese = Array.prototype.slice.call(document.getElementsByClassName('delete'));
  deleteThese.forEach((target: HTMLElement) => {
    if (target.parentNode !== null) {
      target.parentNode.removeChild(target);
    }
  });
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', deleteByClass);
}