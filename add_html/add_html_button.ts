const output = document.getElementById('output');
if (output !== null) {
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Click me');
  button.setAttribute('name', 'buttonId');
  output.appendChild(button);
}
