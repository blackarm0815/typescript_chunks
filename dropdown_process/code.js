"use strict";
var processDropdown = function () {
    var outputDiv = document.getElementById('outputDiv');
    if (outputDiv !== null) {
        outputDiv.innerHTML = '';
        var dropDown_1 = document.getElementById('cars');
        var dropdownData = Array.prototype.slice.call(dropDown_1.options);
        dropdownData.forEach(function (option) {
            outputDiv.innerHTML += 'text - ' + option.text + '<br>';
            outputDiv.innerHTML += 'value - ' + option.value + '<br>';
            outputDiv.innerHTML += 'disabled - ' + option.disabled + '<br>';
            outputDiv.innerHTML += 'selected - ' + option.selected + '<br>';
            outputDiv.innerHTML += '<br>';
        });
    }
};
var dropDown = document.getElementById('cars');
if (dropDown !== null) {
    dropDown.addEventListener('change', processDropdown);
}
processDropdown();
