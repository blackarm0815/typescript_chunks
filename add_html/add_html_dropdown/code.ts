const createDropdown = () => {
  const outputDiv: HTMLElement | null = document.getElementById('output');
  if (outputDiv !== null) {
    const select: HTMLSelectElement = document.createElement('select');
    select.id = 'dropdown';
    outputDiv.appendChild(select);
  }
};
const fillDropdown = () => {
  const testData: Array<string> = ['alpha', 'bravo', 'charlie'];
  const dropDownElement: HTMLElement | null = document.getElementById('dropdown');
  if (dropDownElement !== null) {
    testData.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.text = option;
      optionElement.value = `${option}_value`;
      dropDownElement.appendChild(optionElement);
    });
  }
};
const addDropdown = () => {
  createDropdown();
  fillDropdown();
};
const doStuffButton: HTMLButtonElement | null = <HTMLButtonElement>document.getElementById('doStuff');
if (doStuffButton !== null) {
  doStuffButton.addEventListener('click', addDropdown);
}
