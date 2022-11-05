const processDropdown = () => {
  let dropDown: HTMLSelectElement;
  let dropdownData: Array<HTMLOptionElement>;
  let outputDiv = <HTMLElement>document.getElementById('outputDiv');
  if (outputDiv !== null) {
    dropDown = <HTMLSelectElement>document.getElementById('cars');
    dropdownData = Array.prototype.slice.call(dropDown.options);
    outputDiv.innerHTML = '';
    for (const option of dropdownData) {
      outputDiv.innerHTML += 'text - ' + option.text + '<br>';
      outputDiv.innerHTML += 'value - ' + option.value + '<br>';
      outputDiv.innerHTML += 'disabled - ' + option.disabled + '<br>';
      outputDiv.innerHTML += 'selected - ' + option.selected + '<br>';
      outputDiv.innerHTML += '<br>';
    }
  }
};
let dropDown: HTMLSelectElement | null = <HTMLSelectElement>document.getElementById('cars');
if (dropDown !== null) {
  dropDown.addEventListener('change', processDropdown);
}
processDropdown();