function addOpenLink(elementId, search) {
    var htmlElement;
    htmlElement = document.getElementById(elementId);
    if (htmlElement) {
        htmlElement.addEventListener('click', openLink, false);
        htmlElement.dataset.search = search;
        htmlElement.style.cursor = 'pointer';
    }
}
function openLink(mouseEvent) {
    var elem;
    var search;
    var url;
    url = 'https://duckduckgo.com/?t=chromentp&iax=images&ia=images&q=';
    elem = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    search = elem.dataset.search;
    if (search) {
        window.open(url + search);
    }
}
addOpenLink("dog", "dog");
addOpenLink("cat", "cat");
