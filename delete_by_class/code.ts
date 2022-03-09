const deleteByClass = (targetClass: string) => {
  let deleteThese: Array<HTMLElement> = [];
  deleteThese = Array.prototype.slice.call(document.getElementsByClassName(targetClass));
  deleteThese.forEach((target: HTMLElement) => {
    if (target.parentNode !== null) {
      target.parentNode.removeChild(target);
    }
  });
};
deleteByClass('delete');