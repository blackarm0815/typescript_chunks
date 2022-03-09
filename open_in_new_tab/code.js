"use strict";
var openLink = function (mouseEvent) {
    var elem;
    var search;
    var url = 'https://duckduckgo.com/?t=chromentp&iax=images&ia=images&q=';
    elem = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    search = elem.dataset.search;
    if (search !== undefined) {
        window.open("" + url + search);
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
