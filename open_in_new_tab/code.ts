const openLink = (
  mouseEvent: MouseEvent,
) => {
  let search: string | undefined;
  const url = 'https://duckduckgo.com/?t=chromentp&iax=images&ia=images&q=';
  const elem = <HTMLElement>document.elementFromPoint(mouseEvent.x, mouseEvent.y);
  if (elem !== null) {
    search = elem.dataset.search;
    if (search !== undefined) {
      window.open(`${url}${search}`);
    }
  }
};
const addOpenLink = (
  elementId: string,
  search: string,
) => {
  const htmlElement: HTMLElement | null = document.getElementById(elementId);
  if (htmlElement !== null) {
    htmlElement.addEventListener('click', openLink, false);
    htmlElement.dataset.search = search;
    htmlElement.style.cursor = 'pointer';
  }
};
addOpenLink('dog', 'dog');
addOpenLink('cat', 'cat');
