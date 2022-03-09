
const deleteChildById = (targetId: string) => {
  const myNode: HTMLElement | null = document.getElementById(targetId);
  if (myNode !== null) {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
};
deleteChildById('foo');