var output: HTMLElement | null;
output = document.getElementById('output');
if (output !== null) {
	output.appendChild(document.createTextNode('Input title: '));
	var input = document.createElement('input');
	input.type = 'number';
	input.name = 'inputName'
	input.value = '25';
	output.appendChild(input);
	output.appendChild(document.createElement('br'));
}