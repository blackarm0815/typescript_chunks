var output: HTMLElement | null;
var button: HTMLInputElement;
output = document.getElementById('output');
if (output !== null) {
	button = document.createElement('input');
	button.setAttribute('type','button');
	button.setAttribute('value', 'Click me');
	button.setAttribute('name', 'buttonId');
	output.appendChild(button);
	button.addEventListener('click', () => {
		console.log('click');
	}, false);
}