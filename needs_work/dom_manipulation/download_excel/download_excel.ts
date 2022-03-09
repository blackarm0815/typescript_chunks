function jsonDownload(data, fileName) {
	var anchor: HTMLAnchorElement;
	var outputText: string;
	outputText = JSON.stringify(data, null, 4);
	anchor = document.createElement('a');
	anchor.href = 'data:application/json,' + outputText;
	anchor.setAttribute('download', fileName);
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
}
var outputData: Record<string,string> = {};
outputData['hello'] = 'world';
jsonDownload(outputData, "hello.json");