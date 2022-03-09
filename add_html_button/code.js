"use strict";
var output;
var button;
output = document.getElementById('output');
if (output !== null) {
    button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Click me');
    button.setAttribute('name', 'buttonId');
    output.appendChild(button);
    button.addEventListener('click', function () {
        console.log('click');
    }, false);
}
