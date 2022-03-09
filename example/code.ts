const doStuff = () => {
  let outputDiv: HTMLElement | null = document.getElementById('output');
  if (outputDiv !== null) {
    outputDiv.innerText = 'thank you. :)';
  }
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', doStuff);
}