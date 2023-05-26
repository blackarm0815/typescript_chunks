const output = document.getElementById('output');
if (output !== null) {
    const numberInput = document.createElement('input');
    numberInput.setAttribute('type', 'number');
    numberInput.value = '90';
    output.appendChild(numberInput);
}
