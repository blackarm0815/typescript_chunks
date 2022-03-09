
const deleteChildById = () => {
  const myNode: HTMLElement | null = document.getElementById('foo');
  if (myNode !== null) {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', deleteChildById);
}