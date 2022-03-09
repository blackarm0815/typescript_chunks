"use strict";
var pageResizeDivs = function () {
    var divElement;
    var divHeight = 0;
    var divLeft = 0;
    var divTop = 0;
    var divWidth = 0;
    var topBorder = 10;
    var topForegroundBottom = 0;
    var rightMargin = 5;
    var bottomMargine = 5;
    Promise.resolve()
        .then(function () {
        // resize the top div to fit the width of the page
        divElement = document.getElementById('topForeground');
        if (divElement) {
            divLeft = topBorder;
            divTop = topBorder;
            divWidth = window.innerWidth - (topBorder * 2) - rightMargin;
            divElement.style.left = divLeft + "px";
            divElement.style.top = divTop + "px";
            divElement.style.width = divWidth + "px";
        }
    })
        .then(function () {
        // find the bottom edge of the topForeground div
        if (divElement) {
            topForegroundBottom = divElement.offsetTop + divElement.getBoundingClientRect().height;
        }
        // resize the topBackground div
        divElement = document.getElementById('topBackground');
        if (divElement) {
            divHeight = topForegroundBottom + topBorder;
            divLeft = 0;
            divTop = 0;
            divWidth = window.innerWidth - rightMargin;
            divElement.style.height = divHeight + "px";
            divElement.style.left = divLeft + "px";
            divElement.style.top = divTop + "px";
            divElement.style.width = divWidth + "px";
        }
        // resize the main div
        divElement = document.getElementById('main');
        if (divElement) {
            divHeight = window.innerHeight - topForegroundBottom - topBorder - bottomMargine;
            divLeft = 0;
            divTop = topForegroundBottom + topBorder;
            divWidth = window.innerWidth - rightMargin;
            divElement.style.height = divHeight + "px";
            divElement.style.left = divLeft + "px";
            divElement.style.top = divTop + "px";
            divElement.style.width = divWidth + "px";
        }
    });
};
var setTriggers = function () {
    var toggle = null;
    toggle = document.getElementById('showDivs');
    if (toggle !== null) {
        toggle.addEventListener('change', recolorDivs);
    }
    window.addEventListener('resize', pageResizeDivs);
};
var recolorDivs = function () {
    var toggle = null;
    var divElement = null;
    toggle = document.getElementById('showDivs');
    if (toggle !== null) {
        if (toggle.checked) {
            divElement = document.getElementById('topBackground');
            if (divElement !== null) {
                divElement.className = 'topVisible';
            }
            divElement = document.getElementById('main');
            if (divElement !== null) {
                divElement.className = 'mainVisible';
            }
        }
        else {
            divElement = document.getElementById('topBackground');
            if (divElement !== null) {
                divElement.className = 'topDefault';
            }
            divElement = document.getElementById('main');
            if (divElement !== null) {
                divElement.className = 'mainDefault';
            }
        }
    }
};
recolorDivs();
setTriggers();
pageResizeDivs();
