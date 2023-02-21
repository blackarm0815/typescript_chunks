const processDropdown = () => {
  let outputDiv = <HTMLElement>document.getElementById('outputDiv');
  if (outputDiv !== null) {
    outputDiv.innerHTML = '';
    const dropDown = <HTMLSelectElement>document.getElementById('cars');
    const dropdownData = Array.prototype.slice.call(dropDown.options);
    dropdownData.forEach((option) => {
      outputDiv.innerHTML += 'text - ' + option.text + '<br>';
      outputDiv.innerHTML += 'value - ' + option.value + '<br>';
      outputDiv.innerHTML += 'disabled - ' + option.disabled + '<br>';
      outputDiv.innerHTML += 'selected - ' + option.selected + '<br>';
      outputDiv.innerHTML += '<br>';
    });
  }
};
let dropDown: HTMLSelectElement | null = <HTMLSelectElement>document.getElementById('cars');
if (dropDown !== null) {
  dropDown.addEventListener('change', processDropdown);
}
processDropdown();