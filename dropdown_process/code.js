"use strict";
var processDropdown = function () {
    var outputDiv = document.getElementById('outputDiv');
    var divInner = '';
    if (outputDiv !== null) {
        var dropDown_1 = document.getElementById('cars');
        var dropdownData = Array.prototype.slice.call(dropDown_1.options);
        dropdownData.forEach(function (option) {
            var temp = option;
            divInner += "text - ".concat(temp.text, "<br>");
            divInner += "value - ".concat(temp.value, "<br>");
            if (temp.disabled) {
                divInner += 'disabled - true<br>';
            }
            else {
                divInner += 'disabled - false<br>';
            }
            if (temp.selected) {
                divInner += 'selected - true<br>';
            }
            else {
                divInner += 'selected - false<br>';
            }
            divInner += '<br>';
        });
        outputDiv.innerHTML = divInner;
    }
};
var dropDown = document.getElementById('cars');
if (dropDown !== null) {
    dropDown.addEventListener('change', processDropdown);
}
processDropdown();
