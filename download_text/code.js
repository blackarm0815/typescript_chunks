"use strict";
var downloadFile = function (fileName, fileType, fileContent) {
    var anchor = document.createElement('a');
    anchor.href = "".concat(fileType, ",").concat(encodeURIComponent(fileContent));
    anchor.setAttribute('download', fileName);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};
var doStuff = function () {
    var outputData = { alpha: 'bravo', charlie: 'delta' };
    var fileName = "stuff_".concat(new Date().toISOString(), ".json");
    var jsonText = JSON.stringify(outputData, null, '  ');
    downloadFile(fileName, 'data:application/json', jsonText);
};
var doStuffButton = document.getElementById('doStuff');
if (doStuffButton !== null) {
    doStuffButton.addEventListener('click', doStuff);
}
