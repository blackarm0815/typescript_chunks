"use strict";
var makeDivs = function () {
    var boxHeight = 30;
    var boxWidth = 100;
    var countHorizontal = 5;
    var countVertical = 4;
    var divHeight = 0;
    var divInner;
    var divLeft = 0;
    var divOuter;
    var divTop = 0;
    var divWidth = 0;
    var divMain = document.getElementById('main');
    if (divMain !== null) {
        for (var countOuter = 0; countOuter < 20; countOuter += 1) {
            divOuter = document.createElement('div');
            divOuter.className = 'outer';
            divWidth = (countHorizontal * (boxWidth + 1)) + 1;
            divHeight = (countVertical * (boxHeight + 1)) + 1;
            divOuter.style.width = "".concat(divWidth, "px");
            divOuter.style.height = "".concat(divHeight, "px");
            divMain.appendChild(divOuter);
            for (var x = 0; x < countHorizontal; x += 1) {
                for (var y = 0; y < countVertical; y += 1) {
                    divLeft = (x * (boxWidth + 1)) + 1;
                    divTop = (y * (boxHeight + 1)) + 1;
                    divInner = document.createElement('div');
                    divInner.className = 'inner';
                    divInner.style.position = 'absolute';
                    divInner.style.height = "".concat(boxHeight, "px");
                    divInner.style.left = "".concat(divLeft, "px");
                    divInner.style.top = "".concat(divTop, "px");
                    divInner.style.width = "".concat(boxWidth, "px");
                    divOuter.appendChild(divInner);
                }
            }
        }
    }
};
makeDivs();
