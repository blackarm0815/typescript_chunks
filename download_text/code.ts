const downloadFile = (
  fileName: string,
  fileType: string,
  fileContent: string,
) => {
  const anchor = document.createElement('a');
  anchor.href = `${fileType},${encodeURIComponent(fileContent)}`;
  anchor.setAttribute('download', fileName);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
const doStuff = () => {
  const outputData: Record<string, string> = { alpha: 'bravo', charlie: 'delta' };
  const fileName = `stuff_${new Date().toISOString()}.json`;
  const jsonText = JSON.stringify(outputData, null, '  ');
  downloadFile(fileName, 'data:application/json', jsonText);
};
const doStuffButton = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', doStuff);
}
