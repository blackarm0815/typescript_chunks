const doStuff = () => {
  const outputDiv = document.getElementById('output');
  if (outputDiv !== null) {
    outputDiv.innerText = 'thank you. :)';
  }
};
const doStuffButton = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', doStuff);
}
