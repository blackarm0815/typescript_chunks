var createDropdown = function () {
    var outputDiv = document.getElementById('output');
    if (outputDiv !== null) {
        var select = document.createElement('select');
        select.id = 'dropdown';
        outputDiv.appendChild(select);
    }
};
var fillDropdown = function () {
    var testData = ['alpha', 'bravo', 'charlie'];
    var dropDownElement = document.getElementById('dropdown');
    if (dropDownElement !== null) {
        testData.forEach(function (option) {
            var optionElement = document.createElement('option');
            optionElement.text = option;
            optionElement.value = "".concat(option, "_value");
            dropDownElement.appendChild(optionElement);
        });
    }
};
var addDropdown = function () {
    createDropdown();
    fillDropdown();
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', addDropdown);
}
