const deleteChildById = () => {
  const myNode: HTMLElement | null = document.getElementById('foo');
  if (myNode !== null) {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
};
const doStuffButton = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', deleteChildById);
}
