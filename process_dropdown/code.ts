const processDropdown = () => {
  let dropDown: HTMLSelectElement;
  let dropdownData: Array<HTMLOptionElement>;
  let output: HTMLSelectElement;
  output = <HTMLSelectElement>document.getElementById('output');
  if (output !== null) {
    dropDown = <HTMLSelectElement>document.getElementById('cars');
    dropdownData = Array.prototype.slice.call(dropDown.options);
    output.innerHTML = '';
    for (const option of dropdownData) {
      output.innerHTML += 'text - ' + option.text + '<br>';
      output.innerHTML += 'value - ' + option.value + '<br>';
      output.innerHTML += 'disabled - ' + option.disabled + '<br>';
      output.innerHTML += 'selected - ' + option.selected + '<br>';
      output.innerHTML += '<br>';
    }
  }
};
let dropDown: HTMLSelectElement | null = <HTMLSelectElement>document.getElementById('cars');
if (dropDown !== null) {
  dropDown.addEventListener('change', processDropdown);
}
processDropdown();