"use strict";
var doStuff = function () {
    var outputDiv = document.getElementById('output');
    if (outputDiv !== null) {
        var select = document.createElement('select');
        var optionList = [];
        var optionElement;
        outputDiv.appendChild(select);
        optionList.push(['Choose an option', 'slotAvailability', true, true]);
        optionList.push(['Power - Maximum', 'powerMaximum', false, false]);
        optionList.push(['Power - Average', 'powerAverage', false, false]);
        optionList.forEach(function (option) {
            optionElement = document.createElement('option');
            optionElement.text = option[0];
            optionElement.value = option[1];
            optionElement.disabled = option[2];
            optionElement.selected = option[3];
            select.appendChild(optionElement);
        });
    }
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', doStuff);
}
