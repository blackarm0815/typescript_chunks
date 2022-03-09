function clickAddFunctionality(elementId, hardwareType, sysid, title) {
    // adds data and functionality to element
    var htmlElement;
    htmlElement = document.getElementById(elementId);
    if (htmlElement) {
        // have the cursor show the element is clickable
        htmlElement.style.cursor = 'pointer';
        // store data in the element
        htmlElement.dataset.sysid = sysid;
        htmlElement.dataset.hardwareType = hardwareType;
        // event listener
        htmlElement.addEventListener('click', clickReaction, false);
        // create tooltip element
        htmlElement.title = title;
    }
}
function clickReaction(mouseEvent) {
    // when the element is clicked extract the data and pass it to another function
    var selectedElement;
    var sysid;
    var hardwareType;
    selectedElement = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    if (selectedElement !== null) {
        sysid = selectedElement.dataset.sysid;
        hardwareType = selectedElement.dataset.hardwareType;
        if (sysid !== null && hardwareType !== null) {
            clickUseData(hardwareType, sysid);
        }
        else {
            console.log('Error: either hardwareType or sysid was missing.');
        }
    }
}
function clickUseData(hardwareType, sysid) {
    // uses the extracted data
    var outputPre;
    outputPre = document.getElementById('output');
    if (outputPre !== null) {
        outputPre.innerText = 'hardwareType  = ' + hardwareType + '\n';
        outputPre.innerText += 'sysid         = ' + sysid;
    }
}
clickAddFunctionality('alpha', 'rack', 'kasjdkqjhrkjewhr', 'i am alpha');
clickAddFunctionality('bravo', 'patchpanel', 'jwkejrwlkjdsf', 'i am bravo');
