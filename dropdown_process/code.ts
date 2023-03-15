const processDropdown = () => {
  const outputDiv = <HTMLElement>document.getElementById('outputDiv');
  let divInner = '';
  if (outputDiv !== null) {
    const dropDown = <HTMLSelectElement>document.getElementById('cars');
    const dropdownData = Array.prototype.slice.call(dropDown.options);
    dropdownData.forEach((option) => {
      const temp = <HTMLOptionElement>option;
      divInner += `text - ${temp.text}<br>`;
      divInner += `value - ${temp.value}<br>`;
      if (temp.disabled) {
        divInner += 'disabled - true<br>';
      } else {
        divInner += 'disabled - false<br>';
      }
      if (temp.selected) {
        divInner += 'selected - true<br>';
      } else {
        divInner += 'selected - false<br>';
      }
      divInner += '<br>';
    });
    outputDiv.innerHTML = divInner;
  }
};
const dropDown: HTMLSelectElement | null = <HTMLSelectElement>document.getElementById('cars');
if (dropDown !== null) {
  dropDown.addEventListener('change', processDropdown);
}
processDropdown();
