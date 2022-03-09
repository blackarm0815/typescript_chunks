const openLink = (
  mouseEvent: any,
) => {
  let elem: any;
  let search: string | undefined;
  let url: string = 'https://duckduckgo.com/?t=chromentp&iax=images&ia=images&q=';
  elem = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
  search = elem.dataset.search;
  if (search !== undefined) {
    window.open(`${url}${search}`);
  }
};
const addOpenLink = (
  elementId: string,
  search: string,
) => {
  let htmlElement: HTMLElement | null = document.getElementById(elementId);
  if (htmlElement !== null) {
    htmlElement.addEventListener('click', openLink, false);
    htmlElement.dataset.search = search;
    htmlElement.style.cursor = 'pointer';
  }
};
addOpenLink('dog', 'dog');
addOpenLink('cat', 'cat');
