
const doStuff = () => {
  let outputDiv: HTMLElement | null = document.getElementById('output');
  if (outputDiv !== null) {
    var select: HTMLSelectElement = document.createElement('select');
    var optionList: Array<Array<any>> = [];
    var optionElement: HTMLOptionElement;
    outputDiv.appendChild(select);
    optionList.push(['Choose an option', 'slotAvailability', true, true]);
    optionList.push(['Power - Maximum', 'powerMaximum', false, false]);
    optionList.push(['Power - Average', 'powerAverage', false, false]);
    optionList.forEach(function (option){
      optionElement = document.createElement('option');
      optionElement.text = option[0];
      optionElement.value = option[1];
      optionElement.disabled = option[2];
      optionElement.selected = option[3];
      select.appendChild(optionElement);
    });
  }
};
let doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', doStuff);
}