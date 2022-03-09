function clickAddFunctionality(
	elementId: string,
	hardwareType: string,
	sysid: string,
	title: string
) {
	// adds data and functionality to element
	var htmlElement: HTMLElement | null;
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
function clickReaction(mouseEvent: any) {
	// when the element is clicked extract the data and pass it to another function
	var selectedElement: HTMLElement | null;
	var sysid: string | null;
	var hardwareType: string | null;
	selectedElement = <HTMLElement>document.elementFromPoint(mouseEvent.x, mouseEvent.y);
	if (selectedElement !== null) {
		sysid = selectedElement.dataset.sysid;
		hardwareType = selectedElement.dataset.hardwareType;
		if (sysid !== null && hardwareType !== null) {
			clickUseData(hardwareType, sysid);
		}
		else {
			console.log('Error: either hardwareType or sysid was missing.')
		}
	}
}
function clickUseData(hardwareType: string, sysid: string) {
	// uses the extracted data
	var outputPre: HTMLElement | null;
	outputPre = document.getElementById('output');
	if (outputPre !== null) {
		outputPre.innerText = 'hardwareType  = ' + hardwareType + '\n';
		outputPre.innerText += 'sysid         = ' + sysid;
	}
}
clickAddFunctionality('alpha', 'rack', 'kasjdkqjhrkjewhr', 'i am alpha');
clickAddFunctionality('bravo', 'patchpanel', 'jwkejrwlkjdsf', 'i am bravo');
