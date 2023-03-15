"use strict";
var openLink = function (mouseEvent) {
    var search;
    var url = 'https://duckduckgo.com/?t=chromentp&iax=images&ia=images&q=';
    var elem = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    if (elem !== null) {
        search = elem.dataset.search;
        if (search !== undefined) {
            window.open("".concat(url).concat(search));
        }
    }
};
var addOpenLink = function (elementId, search) {
    var htmlElement = document.getElementById(elementId);
    if (htmlElement !== null) {
        htmlElement.addEventListener('click', openLink, false);
        htmlElement.dataset.search = search;
        htmlElement.style.cursor = 'pointer';
    }
};
addOpenLink('dog', 'dog');
addOpenLink('cat', 'cat');
