"use strict";
var clickUseData = function (message) {
    // uses the extracted data
    var outputPre = document.getElementById('output');
    if (outputPre !== null) {
        outputPre.innerText = message;
    }
};
var clickReaction = function (mouseEvent) {
    // when the element is clicked extract the data and pass it to another function
    var message;
    var selectedElement = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    if (selectedElement !== null) {
        message = selectedElement.dataset.message;
        if (message !== undefined) {
            clickUseData(message);
        }
        else {
            console.log('Error: message not found.');
        }
    }
};
var clickAddFunctionality = function (elementId, message) {
    // adds data and functionality to element
    var htmlElement = document.getElementById(elementId);
    if (htmlElement) {
        htmlElement.style.cursor = 'pointer';
        htmlElement.dataset.message = message;
        htmlElement.addEventListener('click', clickReaction, false);
    }
};
clickAddFunctionality('alpha', 'i am alpha');
clickAddFunctionality('bravo', 'i am bravo');
