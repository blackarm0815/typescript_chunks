
function downloadFile(fileName: string, fileType: string, fileContent: string) {
	let anchor: HTMLAnchorElement;
	anchor = document.createElement('a');
	anchor.href = fileType + ',' + encodeURIComponent(fileContent);
	anchor.setAttribute('download', fileName);
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
}

let outputData: Record<string,string> = {'alpha': 'bravo', 'charlie': 'delta'};
let fileName = 'stuff_' + new Date().toISOString() + '.json';
let jsonText = JSON.stringify(outputData, null, '    ');
downloadFile(fileName, 'data:application/json', jsonText);