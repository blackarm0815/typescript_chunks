"use strict";
var processDropdown = function () {
    var dropDown;
    var dropdownData;
    var output;
    output = document.getElementById('output');
    if (output !== null) {
        dropDown = document.getElementById('cars');
        dropdownData = Array.prototype.slice.call(dropDown.options);
        output.innerHTML = '';
        for (var _i = 0, dropdownData_1 = dropdownData; _i < dropdownData_1.length; _i++) {
            var option = dropdownData_1[_i];
            output.innerHTML += 'text - ' + option.text + '<br>';
            output.innerHTML += 'value - ' + option.value + '<br>';
            output.innerHTML += 'disabled - ' + option.disabled + '<br>';
            output.innerHTML += 'selected - ' + option.selected + '<br>';
            output.innerHTML += '<br>';
        }
    }
};
var dropDown = document.getElementById('cars');
if (dropDown !== null) {
    dropDown.addEventListener('change', processDropdown);
}
processDropdown();
